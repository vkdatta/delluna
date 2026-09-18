export const name="tilt_arrow_down";
export const id="dl_771d0640172449708781";
export const url=new URL("../icons/tilt_arrow_down.svg?v=4a7f38cbdae7f4904a4eb78f97d7abbc86d1ec748282d6e035486b460fa94c01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
