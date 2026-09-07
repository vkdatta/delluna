export const name="asterisk-simple-duotone";
export const id="dl_acb4a4219ec24217b5d2";
export const url=new URL("../icons/asterisk-simple-duotone.svg?v=2eeaa60e479a3e15da2a224c3d70c9d06a17b0915b3b96042a2303a9d4345099",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
