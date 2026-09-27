export const name="hand-coins";
export const id="dl_e5eced4fa9de4b5d813c";
export const url=new URL("../icons/hand-coins.svg?v=2a2101d4ff781a75befad3cb1e890a6e54b464d0657dbe0f12750f49ecb3e802",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
