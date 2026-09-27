export const name="hand-coins";
export const id="dl_e5eced4fa9de4b5d813c";
export const url=new URL("../icons/hand-coins.svg?v=de0ab34c20ba66ccd5aa846c36d99131111374e749c7e8a39dce5cd8f7e62c9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
