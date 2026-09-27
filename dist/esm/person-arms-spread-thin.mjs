export const name="person-arms-spread-thin";
export const id="dl_dbd76282eb2d433788a6";
export const url=new URL("../icons/person-arms-spread-thin.svg?v=a2bf383a4f5d3ab1872098aa416c46403f1eb4365e6f16dd5c7f21efe75ce6cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
