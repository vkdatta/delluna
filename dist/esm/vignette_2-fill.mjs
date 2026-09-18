export const name="vignette_2-fill";
export const id="dl_195fba53ec754361806a";
export const url=new URL("../icons/vignette_2-fill.svg?v=df5203df19acac82582587280f8de885301f6607a94e39061e00d3b3d4376cf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
