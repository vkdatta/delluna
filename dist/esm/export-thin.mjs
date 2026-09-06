export const name="export-thin";
export const id="dl_4effbcf301fb4c44ac70";
export const url=new URL("../icons/export-thin.svg?v=087ddc65a8552b4af74196ff5b9ae357d5d023f602bfd4753cabef1ec2e4b458",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
