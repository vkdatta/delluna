export const name="fish-thin";
export const id="dl_8fd490b1ed6248679ee1";
export const url=new URL("../icons/fish-thin.svg?v=3d247e45fc8000902d98d08c39e149b587c0eb82009168efa441c9d2aea019d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
