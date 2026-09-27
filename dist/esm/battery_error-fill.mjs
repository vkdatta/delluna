export const name="battery_error-fill";
export const id="dl_68222f3455e412f5b33c";
export const url=new URL("../icons/battery_error-fill.svg?v=5b317677a015a1c95fa50d86ece607045ac611e95476606b53ce3b8209ff6af6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
