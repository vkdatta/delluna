export const name="cloud_circle-fill";
export const id="dl_e067929154a0a099ab99";
export const url=new URL("../icons/cloud_circle-fill.svg?v=526a6dd374261b8fa69a6a4f39be8a2eb073bf04c4f694037dfbe8859ebb5ccc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
