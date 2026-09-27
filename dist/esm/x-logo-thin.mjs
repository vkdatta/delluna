export const name="x-logo-thin";
export const id="dl_548581303964d85940fe";
export const url=new URL("../icons/x-logo-thin.svg?v=baa9b2625fe4001daa6fc479b56f5762b8aff33f16074d930684b2eb50169358",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
