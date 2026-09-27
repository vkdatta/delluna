export const name="seal-question-duotone";
export const id="dl_74383c5bda835639d8c1";
export const url=new URL("../icons/seal-question-duotone.svg?v=32d73af4e631c799b0b98a0fd52b0d40914b431916cbe7d01ed99c6340cbe770",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
