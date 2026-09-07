export const name="lightning-slash-thin";
export const id="dl_5d70a186f70e466b950c";
export const url=new URL("../icons/lightning-slash-thin.svg?v=71d3458a0f4f2ee989c3684f99acaed921141687f571bdab3d7620783b74b9a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
