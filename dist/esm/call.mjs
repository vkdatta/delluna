export const name="call";
export const id="dl_d5d9bf99967e45229ca5";
export const url=new URL("../icons/call.svg?v=5f83033339b29cbd6b8f0642cb080eab4576c5b373696efcf9f38d48fdd18ee4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
