export const name="inpatient";
export const id="dl_0cee326d96de502c3e96";
export const url=new URL("../icons/inpatient.svg?v=57d3eb42de0bcd47c1c189a751fbd2dff70772ccd8dd3e1976404339e0a67ae0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
