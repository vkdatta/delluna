export const name="cast_connected-fill";
export const id="dl_cdb5553b514884f8bd59";
export const url=new URL("../icons/cast_connected-fill.svg?v=65c7c57293309bed28caff791e47f4383339be4c257f0130cba57d1ef94e1a33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
