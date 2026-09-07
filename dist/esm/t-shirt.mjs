export const name="t-shirt";
export const id="dl_2c8177ef193f445eb6f8";
export const url=new URL("../icons/T/t-shirt.svg?v=e3ce5f31b4e34d922e67ee55ec7394093be85cfc8d56bf312cc72cdb738c33b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
