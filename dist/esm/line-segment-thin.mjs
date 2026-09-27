export const name="line-segment-thin";
export const id="dl_7f35152c3d4a429d8e10";
export const url=new URL("../icons/line-segment-thin.svg?v=12e07bd933267337799fd6284162fd8fbe1cfaeb66c85fc0293a7f025190b5ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
