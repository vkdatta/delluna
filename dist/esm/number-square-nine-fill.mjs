export const name="number-square-nine-fill";
export const id="dl_5b78cefd661248498100";
export const url=new URL("../icons/number-square-nine-fill.svg?v=7a167519af679880f23bd21c2498c643723b3347c72c625763b5733d968a6dd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
