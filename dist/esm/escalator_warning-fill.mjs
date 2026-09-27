export const name="escalator_warning-fill";
export const id="dl_b01a823a308e21612c31";
export const url=new URL("../icons/escalator_warning-fill.svg?v=6f96f27367921e9f67903879456bea0da4ccc175c7da34e111767b2b1af82128",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
