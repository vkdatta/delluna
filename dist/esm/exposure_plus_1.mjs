export const name="exposure_plus_1";
export const id="dl_df7b51d59a09f9572605";
export const url=new URL("../icons/exposure_plus_1.svg?v=a18a9076047211e26769e1e682f2eaa7fd0c7f4e553025b1fca05a482b1a43d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
