export const name="broom-duotone";
export const id="dl_d37eb4914fab4f10ab1d";
export const url=new URL("../icons/broom-duotone.svg?v=2cf81f98093da1d8015cb1e0c2857f7322b32ddf13eb4805520ab217267ed27d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
