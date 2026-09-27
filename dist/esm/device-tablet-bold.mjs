export const name="device-tablet-bold";
export const id="dl_94ce0a151b09433783ea";
export const url=new URL("../icons/device-tablet-bold.svg?v=829556a7297ae70cbfb7c308198d8496c4da9a92a17e5308e0675a8dbd1d403c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
