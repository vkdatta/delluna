export const name="images-square-bold";
export const id="dl_092ba507d79241c49234";
export const url=new URL("../icons/images-square-bold.svg?v=16d9b2d94262b152303820fb10d9d50a0867c6f53abc63623a9c01c894727a81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
