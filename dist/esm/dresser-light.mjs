export const name="dresser-light";
export const id="dl_a980923f43814ec793d4";
export const url=new URL("../icons/dresser-light.svg?v=649f3e814ff49030fdd0a731df1b4c4d644a79abb7b1e8fc29905abc97919b1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
