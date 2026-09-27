export const name="briefcase-fill";
export const id="dl_dbd21a2440cf42b98d53";
export const url=new URL("../icons/briefcase-fill.svg?v=a8a2af1e35dc258f462640faf50fd934d4f5308292199c233b67820d19d0df33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
