export const name="lightning-light";
export const id="dl_3a7092f378a24289952a";
export const url=new URL("../icons/lightning-light.svg?v=856279ac701706e289a104c81dbee8cb5cf62f9f9f2d687d73e01e0ecb6f1d22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
