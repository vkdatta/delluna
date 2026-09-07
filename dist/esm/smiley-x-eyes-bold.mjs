export const name="smiley-x-eyes-bold";
export const id="dl_92e9647955e443faa9a6";
export const url=new URL("../icons/S/smiley-x-eyes-bold.svg?v=3574fe9534d282bb0a868d22885d3e3069899e10f07d8f23e41c7ad13bea26c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
