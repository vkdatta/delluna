export const name="change_circle";
export const id="dl_6f611497c49e467b8387";
export const url=new URL("../icons/change_circle.svg?v=da8bbcfd48c685de97a505c670a5b7f891ef270a128279b5677739903b13e7fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
