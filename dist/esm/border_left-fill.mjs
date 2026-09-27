export const name="border_left-fill";
export const id="dl_87022c39dc1dca9dbf4a";
export const url=new URL("../icons/border_left-fill.svg?v=748e2735a37067d03e26b56f82624e4dfb2eefbf2efe6ca2b5058775616ff6a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
