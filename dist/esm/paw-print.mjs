export const name="paw-print";
export const id="dl_cec63fd962cf46049a7d";
export const url=new URL("../icons/paw-print.svg?v=83ea6696f08a835833c704403240d4e6d062e1b7e857bdca97661912a1019bf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
