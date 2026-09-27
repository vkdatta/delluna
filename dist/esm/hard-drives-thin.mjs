export const name="hard-drives-thin";
export const id="dl_0265054e0a224f05951f";
export const url=new URL("../icons/hard-drives-thin.svg?v=daa78e56bc423431c5f9e6fc556bb2f298835b37828eaa00f8a6e9deafa13363",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
