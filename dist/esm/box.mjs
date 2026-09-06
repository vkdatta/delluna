export const name="box";
export const id="dl_64e7878c0f9347a1bd77";
export const url=new URL("../icons/box.svg?v=5104ebb402b7365cf9811b9b408983d715b2c7f301d757acc7c962c2610b36ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
