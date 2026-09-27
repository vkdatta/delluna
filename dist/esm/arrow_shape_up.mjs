export const name="arrow_shape_up";
export const id="dl_3b0a29526e01d209f880";
export const url=new URL("../icons/arrow_shape_up.svg?v=df10aee8b6d3b6cafd02a2a5a66d22c931e72f16640ee2f8d5d873120939494e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
