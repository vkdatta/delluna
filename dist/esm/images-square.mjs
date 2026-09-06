export const name="images-square";
export const id="dl_13d08508bbd346eaa6e4";
export const url=new URL("../icons/images-square.svg?v=8e5e386ab31eb04e0545e0d470b6c4be201946e1c253d5e4d50089f5a0161889",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
