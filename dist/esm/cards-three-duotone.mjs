export const name="cards-three-duotone";
export const id="dl_c5aa688eda0c4b2fb363";
export const url=new URL("../icons/cards-three-duotone.svg?v=5b7f1aea5efbf6d21cd5fbc9d06766196195c3dbc7f9ad2d464c6fba7344f7f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
