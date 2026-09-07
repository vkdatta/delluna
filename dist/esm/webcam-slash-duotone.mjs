export const name="webcam-slash-duotone";
export const id="dl_c19a403d674044a4bcce";
export const url=new URL("../icons/W/webcam-slash-duotone.svg?v=47cebec265c95db559c211b32fd0ea382c7de635abb92816147045b030b39cd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
