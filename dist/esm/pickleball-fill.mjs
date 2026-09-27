export const name="pickleball-fill";
export const id="dl_611053a714bc70fe529c";
export const url=new URL("../icons/pickleball-fill.svg?v=580c328ed21de0e2ab6908f072f7eef73ed7032c18417dc1d5f2501f0c39232e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
