export const name="tablet_camera";
export const id="dl_e186aec99ce531e584e5";
export const url=new URL("../icons/tablet_camera.svg?v=4f5ebd238a9aeab18770a7f08b59cf2ca9bd85c501fff1c193b3282dede6315a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
