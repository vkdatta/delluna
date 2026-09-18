export const name="picture_in_picture_medium-fill";
export const id="dl_c63d96d561b2466786b0";
export const url=new URL("../icons/P/picture_in_picture_medium-fill.svg?v=6960d333c7f9bc9279e527e86953268ca86c50824320df12fb0022d86b50c6a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
