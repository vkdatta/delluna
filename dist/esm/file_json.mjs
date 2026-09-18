export const name="file_json";
export const id="dl_c1599fe5533c4fc5becc";
export const url=new URL("../icons/file_json.svg?v=fa336e0d4af50bb772c1fcf588e830ddda936e9e06dccdaa496523d4b204ea79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
