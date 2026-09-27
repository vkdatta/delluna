export const name="crop_16_9";
export const id="dl_dd067fea7cb56c79bf24";
export const url=new URL("../icons/crop_16_9.svg?v=88deaed5999497a8b607e79e2dc25422d4b64ff2ed7b2cd4e0c7a24f272b0aba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
