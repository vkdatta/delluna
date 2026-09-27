export const name="star-half-fill";
export const id="dl_76b972f7e7c8b5684224";
export const url=new URL("../icons/star-half-fill.svg?v=45a63784094650ebac0c96fae3d45f8e873baac3291bde0adac2fe0172e56f49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
