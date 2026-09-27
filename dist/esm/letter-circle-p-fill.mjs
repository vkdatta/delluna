export const name="letter-circle-p-fill";
export const id="dl_3383fba88e2c4b98bf5a";
export const url=new URL("../icons/letter-circle-p-fill.svg?v=836e01bee326f10b54419f99b2d7b7893d4fde1d09e223cc65a6d12daf609b97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
