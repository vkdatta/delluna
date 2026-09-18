export const name="gas_meter-fill";
export const id="dl_ea593a36da944d6dbc24";
export const url=new URL("../icons/gas_meter-fill.svg?v=dab574a03ee2656215db86bfd51bcb8f4cbe54f394e3f241bb2677987d6ddd35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
