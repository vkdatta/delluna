export const name="lucid_2-lasso";
export const id="dl_ef4a38ccabad4573952f";
export const url=new URL("../icons/lucid_2-lasso.svg?v=18902d5b949cc1276e8a68c00c126e1280e673d83762698012ee0b2e88069c7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
