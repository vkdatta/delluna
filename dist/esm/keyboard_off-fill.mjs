export const name="keyboard_off-fill";
export const id="dl_da1217a8358185031f87";
export const url=new URL("../icons/keyboard_off-fill.svg?v=51ddeed8c102244b70ee63ad651a2db8df79f05caf59bd0cfdb045fe7c9d0cca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
