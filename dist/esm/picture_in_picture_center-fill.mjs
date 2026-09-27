export const name="picture_in_picture_center-fill";
export const id="dl_217b882a318ac1965062";
export const url=new URL("../icons/picture_in_picture_center-fill.svg?v=4b3e15eb0438e7e89da6aa6f28879d3dd0548e5f984dbd2bb565e664b3db0269",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
