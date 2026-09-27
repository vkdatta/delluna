export const name="picture_in_picture_large";
export const id="dl_5e84e9446cdd19a85b66";
export const url=new URL("../icons/picture_in_picture_large.svg?v=64cfa5719a7f74b6bfb7c9c66c8a585614bda3ebf58b988526805c1b87d76421",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
