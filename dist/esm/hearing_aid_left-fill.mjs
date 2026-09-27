export const name="hearing_aid_left-fill";
export const id="dl_6cff59507f933cd2d0cf";
export const url=new URL("../icons/hearing_aid_left-fill.svg?v=e4ec40ec41bbb9cbe6a743e39e8105198c2f553bdbd60fc9b3a16af4bde37360",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
