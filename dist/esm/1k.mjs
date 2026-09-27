export const name="1k";
export const id="dl_7957643606641f8f7f00";
export const url=new URL("../icons/1k.svg?v=c330c5bddc8d74637c3b4e6136f9ca256f573d5f1b1de49e16d43df7f377a113",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
