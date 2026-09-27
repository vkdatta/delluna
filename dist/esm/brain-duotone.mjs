export const name="brain-duotone";
export const id="dl_02aec42eab8745a5beca";
export const url=new URL("../icons/brain-duotone.svg?v=0dd96a7bbbe93b5a714e4d2a5b28bd66e078c32efa8463b52492af79ce3097cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
