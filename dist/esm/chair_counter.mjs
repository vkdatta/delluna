export const name="chair_counter";
export const id="dl_3a0e97da6aa04335b0a4";
export const url=new URL("../icons/C/chair_counter.svg?v=66bbe2b0d44db10f9e265e8a0597cce0f5ff1b07963c4c15119d6f708e794370",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
