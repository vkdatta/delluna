export const name="hamburger-fill";
export const id="dl_80b921ccd73949ecbb05";
export const url=new URL("../icons/hamburger-fill.svg?v=948ce799f7d2804259572bf96f171ce1e7eaa4974a07322193650507b8d76ced",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
