export const name="truck-trailer";
export const id="dl_3a3ba1d22163c35b0670";
export const url=new URL("../icons/truck-trailer.svg?v=2b81cf3c317dbe7e8406f3b539a2194ba101b0bf526c282493e53cddbce5a638",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
