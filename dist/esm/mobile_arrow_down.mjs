export const name="mobile_arrow_down";
export const id="dl_60a9def7e9168686a6aa";
export const url=new URL("../icons/mobile_arrow_down.svg?v=650c6f7d6c8fb487665a0be47793f8621ec9d4e3daf6f280f20aa390a8e0eabf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
