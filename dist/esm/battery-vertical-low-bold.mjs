export const name="battery-vertical-low-bold";
export const id="dl_9685083bbeb641b594f0";
export const url=new URL("../icons/battery-vertical-low-bold.svg?v=46beaab3bcf842996b974a2e70338a0e5c26b316ddb5d7a7f441977e5dac7ecc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
