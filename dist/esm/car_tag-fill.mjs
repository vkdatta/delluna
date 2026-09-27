export const name="car_tag-fill";
export const id="dl_92b8523258faf86671dd";
export const url=new URL("../icons/car_tag-fill.svg?v=297b0812da3a8365c3d33ac8e553709051f103e26df3051617496fa17920251f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
