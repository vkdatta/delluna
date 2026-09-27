export const name="lucid_1-clipboard-plus";
export const id="dl_499c8a6441344eddb6bd";
export const url=new URL("../icons/lucid_1-clipboard-plus.svg?v=b9027870e15cba63a09322a8390846cf5ce4754f0c5f303b91bc0598d6a1f6d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
