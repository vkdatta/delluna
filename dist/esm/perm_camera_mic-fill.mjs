export const name="perm_camera_mic-fill";
export const id="dl_23e2179d57660ab1cf34";
export const url=new URL("../icons/perm_camera_mic-fill.svg?v=fe20fa6452bd0af7082e147be96749db3c2f4ad831c24822d7f147c0db8055d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
