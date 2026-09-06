export const name="pen-nib-straight-bold";
export const id="dl_5976d4dec2a74c0e9774";
export const url=new URL("../icons/pen-nib-straight-bold.svg?v=95add296f38bc700b8e61d16108203156ec7985042e9a2b05f9c34f50965c2fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
