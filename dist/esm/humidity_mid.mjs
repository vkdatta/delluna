export const name="humidity_mid";
export const id="dl_7b3816db0408ec2c81d2";
export const url=new URL("../icons/humidity_mid.svg?v=d8434eb1f90109f2427e2f53229a308206a3e0deed4842a2c030372125e8332d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
