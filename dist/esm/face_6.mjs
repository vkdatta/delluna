export const name="face_6";
export const id="dl_4f4a64732e3c5cb03db2";
export const url=new URL("../icons/face_6.svg?v=126552cb8cd769edacc023af9178675784066408632f5ba8d03a434b892aa504",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
