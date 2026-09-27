export const name="air-traffic-control-fill";
export const id="dl_33f95e6dd0174f4b8e57";
export const url=new URL("../icons/air-traffic-control-fill.svg?v=4aa8ad5ec4fd7026af7b7e4bd5573997cac014a7c1a8c3262aec405945bf9fae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
