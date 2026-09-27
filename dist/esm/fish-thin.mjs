export const name="fish-thin";
export const id="dl_8fd490b1ed6248679ee1";
export const url=new URL("../icons/fish-thin.svg?v=8d001ca4fc105042bdffe9e0cca85c163c3e67a9522306e6f8f365f58d9620cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
