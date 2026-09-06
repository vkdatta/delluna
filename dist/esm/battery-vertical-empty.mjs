export const name="battery-vertical-empty";
export const id="dl_a13fbb8e9705497182af";
export const url=new URL("../icons/battery-vertical-empty.svg?v=6122fcc074cfaea153615dd9f231cb174b0467927c0be5922d046cb68e980af3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
