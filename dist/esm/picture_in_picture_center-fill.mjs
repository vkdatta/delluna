export const name="picture_in_picture_center-fill";
export const id="dl_758ba93ae6dda5191816";
export const url=new URL("../icons/picture_in_picture_center-fill.svg?v=50181cd3047e6b9f14d1bb530844828cc955d1674f0962387233ebd074448822",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
