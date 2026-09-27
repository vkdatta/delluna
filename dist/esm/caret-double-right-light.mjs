export const name="caret-double-right-light";
export const id="dl_2cac7cad938e40b58332";
export const url=new URL("../icons/caret-double-right-light.svg?v=bfcea193d8eefeeb0b1f3074b32d579dfc213623fee90b5b8a116bac8faa12ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
