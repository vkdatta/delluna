export const name="align-top-simple";
export const id="dl_cb7fcad52f20438ca78a";
export const url=new URL("../icons/align-top-simple.svg?v=6e0a5f893e14661f73b1a376e59e25e0faec0917315800fc70ccc32ed7fa2b95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
