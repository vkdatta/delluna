export const name="picture_in_picture_off-fill";
export const id="dl_823b1d1a7785b7e09ffd";
export const url=new URL("../icons/picture_in_picture_off-fill.svg?v=f86690e8e1c155fb645b34e1f0187e597a05cfece929bfb492716b22c9fa05bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
