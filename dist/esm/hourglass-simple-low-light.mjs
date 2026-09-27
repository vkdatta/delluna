export const name="hourglass-simple-low-light";
export const id="dl_14f149e97e1746e1a7fc";
export const url=new URL("../icons/hourglass-simple-low-light.svg?v=ec98b5c302e5f266cb63c3769767c0f853a40d69db38c4e0f9349c97eb5c7498",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
