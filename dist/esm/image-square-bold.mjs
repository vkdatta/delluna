export const name="image-square-bold";
export const id="dl_fab369778b834f1eb4c2";
export const url=new URL("../icons/image-square-bold.svg?v=ea6a63c81e23e8ce9b79119ed7b301547c2f80277b8e68654ad591ca884adf9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
