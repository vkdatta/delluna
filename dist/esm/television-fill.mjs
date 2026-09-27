export const name="television-fill";
export const id="dl_f1471170073fad8d00d6";
export const url=new URL("../icons/television-fill.svg?v=19244dbf98a89e6cf7cda8aec47feb00c5d82f43004b05c08ba3cb2f6b7ed38f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
