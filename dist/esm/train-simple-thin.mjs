export const name="train-simple-thin";
export const id="dl_11fb6792ce532f5d2621";
export const url=new URL("../icons/train-simple-thin.svg?v=99ee7f7e18530f2f1ec78c5c62eaca2560ec109bc46e4db20f2b824b1b5d23ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
