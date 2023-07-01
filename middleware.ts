import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr'],
 
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en'
});
 
export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
// import { NextRequest, NextResponse } from 'next/server'
 
// const PUBLIC_FILE = /\.(.*)$/
 
// export async function middleware(req: NextRequest) {
//   if (
//     req.nextUrl.pathname.startsWith('/_next') ||
//     req.nextUrl.pathname.includes('/api/') ||
//     PUBLIC_FILE.test(req.nextUrl.pathname)
//   ) {
//     return
//   }
 
//   if (req.nextUrl.locale === 'default') {
//     const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en'
 
//     return NextResponse.redirect(
//       new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
//     )
//   }
// }