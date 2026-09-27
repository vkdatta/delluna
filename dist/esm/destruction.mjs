export const name="destruction";
export const id="dl_4e4a4e11af22f017f1f4";
export const url=new URL("../icons/destruction.svg?v=3c70260bb5fe5d6faab5bca4892c00341f21976ef642fed8aaec276aef5b4d8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
