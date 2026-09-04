export const name="pinterest-logo";
export const id="dl_1e9518053712466eae90";
export const url=new URL("../../icons/P/pinterest-logo.svg?v=19c182a79379147de7cb19eee879cd83810e5bbc2f4414e91b046792a58ac4ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
