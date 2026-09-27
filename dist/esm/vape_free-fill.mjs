export const name="vape_free-fill";
export const id="dl_4ff3d271d89c08cdfd50";
export const url=new URL("../icons/vape_free-fill.svg?v=4b36d33a994580e99ae7845fa6d6b7ae3b179370d72b8608b9df5e1ed60e27c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
