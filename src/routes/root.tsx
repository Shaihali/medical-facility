import { Link, Outlet, useLocation } from "react-router-dom";

export default function Root() {
  const location = useLocation().pathname;

  return (
    <>
      <div id="sidebar" className="sm:w-full lg:w-72">
        <h2 className="sm:order-none lg:order-1">ГБУ РФ Медучреждение</h2>
        <nav>
          <ul className="flex sm:flex-row lg:flex-col sm:gap-20 lg:gap-0">
            <li>
              <Link
                to={`/`}
                className={`mb-10
                  ${
                    location === "/"
                      ? "bg-gray-200"
                      : "bg-indigo-500 text-white"
                  }`}
              >
                Главное
              </Link>
            </li>
            <ul className="flex sm:flex-row lg:flex-col sm:gap-4 lg:gap-0">
              <li>
                <Link
                  to={`/doctors`}
                  className={
                    location === "/doctors"
                      ? "bg-gray-200"
                      : "bg-indigo-500 text-white"
                  }
                >
                  Врачи
                </Link>
              </li>
              <li>
                <Link
                  to={`/nurses`}
                  className={
                    location === "/nurses"
                      ? "bg-gray-200"
                      : "bg-indigo-500 text-white"
                  }
                >
                  Медсестра
                </Link>
              </li>
            </ul>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
