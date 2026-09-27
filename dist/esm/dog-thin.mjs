export const name="dog-thin";
export const id="dl_ce0a4ef357234fa89303";
export const url=new URL("../icons/dog-thin.svg?v=f2bbf312a8a99f3f16c1e1d0f8bba74f822d621fa6840268384c61dc3c3e61e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
