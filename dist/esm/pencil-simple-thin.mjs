export const name="pencil-simple-thin";
export const id="dl_6e59d42433a94fb581ba";
export const url=new URL("../icons/pencil-simple-thin.svg?v=0a8adff57895b101fe3841d61f62f1b666e96f0ad416e1e01a7458f78ad81f5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
