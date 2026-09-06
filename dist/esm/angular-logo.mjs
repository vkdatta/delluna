export const name="angular-logo";
export const id="dl_0a903c774f3c46249abb";
export const url=new URL("../icons/angular-logo.svg?v=9b738b9fa8987dec2d1fa581f323642fabb5179da4244a504dc27518525e460d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
