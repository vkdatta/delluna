export const name="science-fill";
export const id="dl_ba9e80ba32914698a93e";
export const url=new URL("../icons/science-fill.svg?v=a210496fa26cb495d78491da5e525fa2cd5b64ac5b70770edaef54739296f8d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
