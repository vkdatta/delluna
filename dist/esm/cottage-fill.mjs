export const name="cottage-fill";
export const id="dl_ff9db3d03d5aa06b7217";
export const url=new URL("../icons/cottage-fill.svg?v=684f8547e023fdc2fef05809293c5003df7fedde0b58a3aef538fb3d63ea174b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
