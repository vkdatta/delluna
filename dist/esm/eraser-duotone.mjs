export const name="eraser-duotone";
export const id="dl_e72a46690bb34e779812";
export const url=new URL("../icons/eraser-duotone.svg?v=690abe34e1a9601248696fd34ee857b3bfd743a5fe5f629cfee4de481920a3e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
