export const name="taxi";
export const id="dl_d0e3963fe00d6e70d8f4";
export const url=new URL("../icons/taxi.svg?v=5b6a6af7fb0131327492d7451ee25229d58ba5d2858ddb01289727d8eeba536e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
