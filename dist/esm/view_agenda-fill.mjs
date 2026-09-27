export const name="view_agenda-fill";
export const id="dl_3b209c38602f796bfa3b";
export const url=new URL("../icons/view_agenda-fill.svg?v=de4e73dbb7493c64b9d30382675ff333879e2796ed08f7c6efeb967ed91e1ff8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
