export const name="reopen_window-fill";
export const id="dl_26231d4c0c2f8f28fb85";
export const url=new URL("../icons/reopen_window-fill.svg?v=48739b5513639d85ec675e54ee9c9b3a8ed6de1ff9b66178e91b5ee1118c871c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
