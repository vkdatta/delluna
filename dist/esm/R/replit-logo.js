export const name="replit-logo";
export const id="dl_e19d1c0afbfc4879b2a3";
export const url=new URL("../../icons/R/replit-logo.svg?v=6706fb74ea94cef1e681473178653d67c89bf15016dc3f25eab511e66e2a675c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
