export const name="chair_counter";
export const id="dl_ace502654dc655736d14";
export const url=new URL("../icons/chair_counter.svg?v=df44679478319c967eebf7e9e5b42fd1a205443cac7d42ff5ea1d5730a57eef8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
