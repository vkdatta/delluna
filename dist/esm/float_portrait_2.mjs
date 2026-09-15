export const name="float_portrait_2";
export const id="dl_e8b316e8875b4d22a2c1";
export const url=new URL("../icons/F/float_portrait_2.svg?v=15cda9bcac60f4f7579d828da2d041a1f0716c159d5c14ea43676f6dbaa6c592",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
