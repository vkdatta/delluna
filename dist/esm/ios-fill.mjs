export const name="ios-fill";
export const id="dl_0748646a7e67898c946e";
export const url=new URL("../icons/ios-fill.svg?v=67c34f1f8c9fb18db5aea1406b84f33dc05b44c2fc5f06d6df228b3e0a017dc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
