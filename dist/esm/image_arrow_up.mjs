export const name="image_arrow_up";
export const id="dl_d76e7bc6b340f89174a8";
export const url=new URL("../icons/image_arrow_up.svg?v=a684fca3ac5838bf736e1df3616e970b68906838129a0610ed4467484be66558",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
