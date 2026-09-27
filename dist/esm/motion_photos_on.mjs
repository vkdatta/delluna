export const name="motion_photos_on";
export const id="dl_767e6c27cc8d3b20c72c";
export const url=new URL("../icons/motion_photos_on.svg?v=6eea6f1c34c426fa50823c722b85693b5dc1b115319c7a6f0ec51395b963d228",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
