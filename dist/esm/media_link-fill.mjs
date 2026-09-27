export const name="media_link-fill";
export const id="dl_cde42138d65c384d2daf";
export const url=new URL("../icons/media_link-fill.svg?v=289791f62896a0f07a03abec7ee644fa758ec5f3cb27a1078e455ae3e990a156",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
