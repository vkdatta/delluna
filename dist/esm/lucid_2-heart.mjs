export const name="lucid_2-heart";
export const id="dl_33e12c3fd90146d0b7e3";
export const url=new URL("../icons/lucid_2-heart.svg?v=d5b7d8b35b03a59233dff9b9183c3231801bec3d7a9763045ab63598c5327b14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
