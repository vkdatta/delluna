export const name="placeholder-light";
export const id="dl_dce60049ae874a5693cf";
export const url=new URL("../icons/placeholder-light.svg?v=efabcc3cec32f984e8e739d8393c5b8abd5f13b167c03df5616d820913818ef1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
