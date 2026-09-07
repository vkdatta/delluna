export const name="skype-logo-bold";
export const id="dl_77e6671e12c149d3b1ce";
export const url=new URL("../icons/S/skype-logo-bold.svg?v=eb1c462bb66e3fdb8a3beac2554329fef66ff678151b6400bcbd63120c12c4de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
