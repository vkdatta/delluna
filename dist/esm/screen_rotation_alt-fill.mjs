export const name="screen_rotation_alt-fill";
export const id="dl_27928edebc7454175fb5";
export const url=new URL("../icons/screen_rotation_alt-fill.svg?v=3b62af90b08fea6df2600ade5e17aec8610d73162ffc4587b0cf67090fefb455",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
