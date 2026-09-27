export const name="arrow-u-up-left-light";
export const id="dl_9dc276ebab5e4703a051";
export const url=new URL("../icons/arrow-u-up-left-light.svg?v=6f6b42e4e41471436fdab75fa9c639eca2e93d6c264131654584afcfc14a48fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
