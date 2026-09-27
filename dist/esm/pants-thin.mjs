export const name="pants-thin";
export const id="dl_10d89dca33a648f5bf4f";
export const url=new URL("../icons/pants-thin.svg?v=837c9ddfc5e7eafd1a9de20050c8fa514f0f8de5e604f85c2d5a76d35183b1c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
