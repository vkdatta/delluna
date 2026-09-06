export const name="network-x-light";
export const id="dl_4a70caf25978447e8b84";
export const url=new URL("../icons/network-x-light.svg?v=4ff21bbc244fbc9b17b29696ce26a8a42a9cd916445719d325baef82381b5ea4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
