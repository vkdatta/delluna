export const name="presentation-thin";
export const id="dl_b095ff9726834cbfb7f7";
export const url=new URL("../icons/presentation-thin.svg?v=cf1f27b93cf79d1d1f7ae511a34d5af178bed8e383d16a6663195b3f0380ca2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
