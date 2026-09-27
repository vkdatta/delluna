export const name="select_to_speak-fill";
export const id="dl_6be22e595b36df43bda1";
export const url=new URL("../icons/select_to_speak-fill.svg?v=66162dd82912f05acc92bdb2e3e05b9babcae18e3203f4118d33694efd403ef0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
