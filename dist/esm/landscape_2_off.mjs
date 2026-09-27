export const name="landscape_2_off";
export const id="dl_7754bf1a9cdfcef49fd3";
export const url=new URL("../icons/landscape_2_off.svg?v=f87bcc9fe2d784b3168ca98cce8094f1a43725ae868f42a2ce04e902e8bb5f51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
