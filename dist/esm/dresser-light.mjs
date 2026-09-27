export const name="dresser-light";
export const id="dl_a980923f43814ec793d4";
export const url=new URL("../icons/dresser-light.svg?v=a79744ee87657ff1350054d8df84dda623cc62a9ba7c6731f365c43a64e568e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
