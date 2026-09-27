export const name="light";
export const id="dl_e368119fe9e0148227b2";
export const url=new URL("../icons/light.svg?v=8800029fa6a4a3fab90a53d9e808d5bfd96a1008d17a2fc674dff98a0739c88f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
