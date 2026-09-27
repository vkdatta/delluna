export const name="join_inner-fill";
export const id="dl_469a261383de42b80fc5";
export const url=new URL("../icons/join_inner-fill.svg?v=c65c17ecfff1930e4780961b82c45960e5539f8842366cf84e719024cd3d73c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
