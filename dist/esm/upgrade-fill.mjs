export const name="upgrade-fill";
export const id="dl_81b273326cae3afedfe0";
export const url=new URL("../icons/upgrade-fill.svg?v=0524ae258d1e6ac5d05fb1ada9bff9c2d16daf1ca6731bda56452017023de9e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
