export const name="number-circle-nine-thin";
export const id="dl_19994ae6686745b1a015";
export const url=new URL("../icons/number-circle-nine-thin.svg?v=36cdb9d4cfce8fc0a47767b9d13f421d7211b1e9a4b36fa496fa89b378f194d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
