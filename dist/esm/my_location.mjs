export const name="my_location";
export const id="dl_dcdc9b994087d3d1d075";
export const url=new URL("../icons/my_location.svg?v=36c4d41f38dacace6d7ce0b693b09ea2ab85500d7fab708350d97ed0c0289917",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
