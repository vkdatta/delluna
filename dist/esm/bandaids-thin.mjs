export const name="bandaids-thin";
export const id="dl_a7a9fa03a46844399eb5";
export const url=new URL("../icons/bandaids-thin.svg?v=833a224765e338b6eccc5e075534406dfd85cb9e36e2b31dc19b404ba65d4ab5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
