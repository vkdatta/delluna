export const name="file-jpg-thin";
export const id="dl_385838cf82ca43c68821";
export const url=new URL("../icons/file-jpg-thin.svg?v=3c8e37f1440ecf2212bf0ad99a45c9ba67dd6fda24b37f7af26fab114448e592",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
