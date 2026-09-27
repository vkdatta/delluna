export const name="cloud-warning";
export const id="dl_8eb73ad5c8ca47548249";
export const url=new URL("../icons/cloud-warning.svg?v=26b569929f7a30a3deb9b3a43907432893f013d6938a907b26e78afbd20efdab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
