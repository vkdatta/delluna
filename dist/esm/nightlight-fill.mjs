export const name="nightlight-fill";
export const id="dl_3c3837c9a02c53685ece";
export const url=new URL("../icons/nightlight-fill.svg?v=4d8de117aa1a5d94b0445f66c542af29f4da98b3a70cc84deb909b0591c31589",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
