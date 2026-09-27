export const name="lucid_1-car-front";
export const id="dl_9d6b1e35e4d04211b868";
export const url=new URL("../icons/lucid_1-car-front.svg?v=19816256a936240dac48a0b07ca5ebdd8a7b552f6e87af877f9180a870771bfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
