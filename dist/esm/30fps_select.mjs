export const name="30fps_select";
export const id="dl_b7b5282345ecc49204a5";
export const url=new URL("../icons/30fps_select.svg?v=795800b11917e7fe4ef60de90fabe13bb9e77f34b970f1cf7f18d9c934c2228e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
