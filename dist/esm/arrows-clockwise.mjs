export const name="arrows-clockwise";
export const id="dl_99af76ae106e4f99a875";
export const url=new URL("../icons/arrows-clockwise.svg?v=2e80fbc9c5c37553934c9ebbd6324bf7fabe9a4b4d7c2445d99edfce55cc22df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
