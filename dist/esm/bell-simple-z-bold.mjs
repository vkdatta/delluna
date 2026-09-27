export const name="bell-simple-z-bold";
export const id="dl_f3853f54043d4d7dadb2";
export const url=new URL("../icons/bell-simple-z-bold.svg?v=5be4b151e36050b9f42ef18c455bd3f9c448c4277517006df474dbdc9137623c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
