export const name="sidebar-bold";
export const id="dl_ee18a19968dc452694f0";
export const url=new URL("../icons/S/sidebar-bold.svg?v=1f80bede208e20632136f3a250a891394a642f42f79400678ebb3479c3cbb82f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
