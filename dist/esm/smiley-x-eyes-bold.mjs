export const name="smiley-x-eyes-bold";
export const id="dl_d7ee2e2445b2f940fa63";
export const url=new URL("../icons/smiley-x-eyes-bold.svg?v=3574fe9534d282bb0a868d22885d3e3069899e10f07d8f23e41c7ad13bea26c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
