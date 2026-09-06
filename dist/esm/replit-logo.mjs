export const name="replit-logo";
export const id="dl_e19d1c0afbfc4879b2a3";
export const url=new URL("../icons/replit-logo.svg?v=6706fb74ea94cef1e681473178653d67c89bf15016dc3f25eab511e66e2a675c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
