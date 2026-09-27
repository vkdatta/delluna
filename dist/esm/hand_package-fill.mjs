export const name="hand_package-fill";
export const id="dl_53f4624b91efbfae9be4";
export const url=new URL("../icons/hand_package-fill.svg?v=e147007b219ef84b0a4ac31ddeb6d37a052ed3ac7dc4612e27c926ae4635d917",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
