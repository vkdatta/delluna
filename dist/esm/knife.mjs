export const name="knife";
export const id="dl_3af3e02149094ffa85af";
export const url=new URL("../icons/knife.svg?v=c5e9cabb05d7d1beed9eccf0d024d5a557e3d1cb84279f0dbe2e469559028730",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
