export const name="groups-fill";
export const id="dl_f648dd4a5d7047b8bc93";
export const url=new URL("../icons/groups-fill.svg?v=fd3c6576d7901d6ff25ba6f45981699a6d518cc9dddd2cc3ca37d7d270c0d8c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
