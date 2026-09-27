export const name="plus-thin";
export const id="dl_13501357e15542e780cd";
export const url=new URL("../icons/plus-thin.svg?v=81735cbcb107c1adf2c6cbdd6e12a79c6f3d3951b77468fd7c91f63676fd034c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
