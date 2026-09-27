export const name="lucid_1-bridge";
export const id="dl_0b9a86ee9ffe46788e89";
export const url=new URL("../icons/lucid_1-bridge.svg?v=27c4871ec0402e7fdcc9db62875f78983c5f8c0bffd4a56510fa658d9d2150d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
