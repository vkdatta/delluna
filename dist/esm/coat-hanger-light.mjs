export const name="coat-hanger-light";
export const id="dl_8d9e6e2e4b6f4cf6958b";
export const url=new URL("../icons/coat-hanger-light.svg?v=c91c74563173f0cbeea5c0e9250678fa71f9677cb956977534d4737d819ba6a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
