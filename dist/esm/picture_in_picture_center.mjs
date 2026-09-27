export const name="picture_in_picture_center";
export const id="dl_c49a5031751555c55a74";
export const url=new URL("../icons/picture_in_picture_center.svg?v=51fc802fff7b7a122309cf1f63e2e2e31e034ca913909a679bf2b81a03982c70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
