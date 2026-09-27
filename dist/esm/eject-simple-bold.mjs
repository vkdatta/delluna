export const name="eject-simple-bold";
export const id="dl_da13cd6d571949b99911";
export const url=new URL("../icons/eject-simple-bold.svg?v=7bb48f94b33c8a139b93d92bf347523fe48b0f0a2a4c99b755c507578a56f912",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
