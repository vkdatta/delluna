export const name="lucid_1-cone";
export const id="dl_ad878ba6bd9a4b04959a";
export const url=new URL("../icons/lucid_1-cone.svg?v=8029ea7278a778fb3c21436f075fdf13e4666107c6bf1ee427e65e33145a3290",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
