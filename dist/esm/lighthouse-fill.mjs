export const name="lighthouse-fill";
export const id="dl_9a5074ec8c5841c98e42";
export const url=new URL("../icons/lighthouse-fill.svg?v=cc99b2fdb32dca49d8d9781997364d7d04b9bd0863a54e47e4fb500da7a44dab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
