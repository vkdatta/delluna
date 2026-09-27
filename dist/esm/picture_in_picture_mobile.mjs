export const name="picture_in_picture_mobile";
export const id="dl_7d76ffb710c5ab5b1fb0";
export const url=new URL("../icons/picture_in_picture_mobile.svg?v=166f0cdd7764d2f7463b6d494201bc76ceab186d7ef6fde7fcc620d2e28d8755",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
