export const name="user-minus";
export const id="dl_5cf5abee3c0340398280";
export const url=new URL("../icons/U/user-minus.svg?v=2582236704a313bb05d4f1ed954c0fe389067f9a95de2cf8c1ace7377b63a820",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
