export const name="rows-plus-bottom-light";
export const id="dl_014c52ec75fb48f3ab5d";
export const url=new URL("../icons/rows-plus-bottom-light.svg?v=23e6a11a0da8809bbd9aefcbf3003146d4a7787a2f38ad41af178aa688168cc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
