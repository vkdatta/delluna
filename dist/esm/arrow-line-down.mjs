export const name="arrow-line-down";
export const id="dl_d0cc6277107f4ae3bfba";
export const url=new URL("../icons/arrow-line-down.svg?v=5df5a2662a4f1d0084be0d76267a083f9389aa7ecf876a1aec1ac55816d9f8d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
