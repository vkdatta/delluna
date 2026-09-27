export const name="picture_in_picture-fill";
export const id="dl_cc6f389868a004c63ffe";
export const url=new URL("../icons/picture_in_picture-fill.svg?v=abe58fd79539b39f3c706562106592ebde56fd6cdeb8f43146a7040bcd4db032",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
