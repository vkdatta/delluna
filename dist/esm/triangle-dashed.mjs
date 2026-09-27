export const name="triangle-dashed";
export const id="dl_12101ec8ed1640efaaac";
export const url=new URL("../icons/triangle-dashed.svg?v=60b8c0965daee0561214aea5ae0dd669897296c7d5e588bea320509a1a191d78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
