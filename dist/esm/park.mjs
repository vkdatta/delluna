export const name="park";
export const id="dl_70d49a6fbd6b4461a13c";
export const url=new URL("../icons/park.svg?v=35f729d802bd435bf9bce9c81a10faac81f218d144afc99969da532417f7a433",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
