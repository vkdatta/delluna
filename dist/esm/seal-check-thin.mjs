export const name="seal-check-thin";
export const id="dl_c175455d0ccb41456413";
export const url=new URL("../icons/seal-check-thin.svg?v=04da8961849e88d55f853a6664cdea3fde86db57137265b59ce039e1ca22bb0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
