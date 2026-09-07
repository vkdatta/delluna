export const name="scan";
export const id="dl_35fd323a2c8f429ba29e";
export const url=new URL("../icons/S/scan.svg?v=b41a343997afb4cb31cb0d490358d1f1544b14029d0d3a717ff2ba4c07dc5397",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
