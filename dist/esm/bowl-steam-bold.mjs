export const name="bowl-steam-bold";
export const id="dl_1fd3849a83444835bde1";
export const url=new URL("../icons/bowl-steam-bold.svg?v=301029951faa76503178f7526309ac0f7e8266a28b269ec26590b2d21f954e90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
