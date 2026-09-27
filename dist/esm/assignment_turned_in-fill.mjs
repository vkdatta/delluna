export const name="assignment_turned_in-fill";
export const id="dl_ac3d76f1a74c0f407d50";
export const url=new URL("../icons/assignment_turned_in-fill.svg?v=8e380c4e61fc49c6b901cf961fa44e80c463559f34d8298c0b08e3a22d21d44e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
