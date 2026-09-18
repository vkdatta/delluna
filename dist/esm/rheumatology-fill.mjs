export const name="rheumatology-fill";
export const id="dl_14d0ba299cb445a5821e";
export const url=new URL("../icons/R/rheumatology-fill.svg?v=9651aa5d0c790a648d1ac2e058307505e0a045ee547b1cd018768519f3f938fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
