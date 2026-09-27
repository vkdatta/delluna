export const name="user-rectangle-fill";
export const id="dl_3e17fc035e911093a31b";
export const url=new URL("../icons/user-rectangle-fill.svg?v=e687e396ed6ae7905150f814ecef80be38f08e641babd3c2635d6aa0e1a80796",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
