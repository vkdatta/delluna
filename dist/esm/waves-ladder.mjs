export const name="waves-ladder";
export const id="dl_13529ff48cd94e9d894c";
export const url=new URL("../icons/waves-ladder.svg?v=112225e51361fcfca03316d94da70239303cebb2d215dd814aa615a9502819b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
