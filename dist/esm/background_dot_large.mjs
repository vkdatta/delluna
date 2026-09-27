export const name="background_dot_large";
export const id="dl_80da8d666b463d3be0af";
export const url=new URL("../icons/background_dot_large.svg?v=9a1a5b095e6411acde36aaeff2ba51325ca21e2ebe68d6de995b1808847f6e8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
