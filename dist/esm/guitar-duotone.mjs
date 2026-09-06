export const name="guitar-duotone";
export const id="dl_22fce0380f774373b77e";
export const url=new URL("../icons/guitar-duotone.svg?v=cea1baf9ec6a944ffb8235381bff46fdd834727cf2f835473ce0c75db5da0aac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
