export const name="video_settings-fill";
export const id="dl_6cdddd9ea92709a904e4";
export const url=new URL("../icons/video_settings-fill.svg?v=8bbaed270dcc7870ecc46dbae11e030793d9353cfb5a5af2b2f650868f88287d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
