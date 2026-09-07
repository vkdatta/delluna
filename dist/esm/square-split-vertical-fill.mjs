export const name="square-split-vertical-fill";
export const id="dl_8904b97216da4bcc8eff";
export const url=new URL("../icons/S/square-split-vertical-fill.svg?v=0ace6381e25145a677d0e2841813c292436bd451d3c3c96def9061a82f4cb83b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
