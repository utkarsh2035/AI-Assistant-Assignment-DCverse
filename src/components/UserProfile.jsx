export default function UserProfile() {
  const user = JSON.parse(localStorage.getItem('currentUser')) || []
  console.log(user)

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No user data found. Please log in.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md border border-gray-200 rounded-xl overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Account Settings
          </h2>
        </div>

        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src="data:image/jpeg;base64,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"
                alt="User Avatar"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full border-2 border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7h4l3-3h4l3 3h4v14H3V7z"
                  />
                  <circle
                    cx={12}
                    cy={13}
                    r={4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </div>
            </div>

            <div>
              <p className="font-medium text-gray-900">{user.fullName}</p>
              <p className="text-gray-500 text-sm">{user.email}</p>
            </div>
          </div>

          <p className="mt-4 text-gray-600 text-sm">
            Welcome back, {user.fullName}! This is your PopX profile page.
          </p>
        </div>

        <div className="border-t border-dashed border-gray-300" />
      </div>
    </div>
  )
}
