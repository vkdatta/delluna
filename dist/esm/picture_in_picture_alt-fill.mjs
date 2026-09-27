export const name="picture_in_picture_alt-fill";
export const id="dl_2fc7d6e2994d7fd9585c";
export const url=new URL("../icons/picture_in_picture_alt-fill.svg?v=38793167827bc72b17dc74622c0c2a9c30d86a28dc718a7738e28f7ea17e3093",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
