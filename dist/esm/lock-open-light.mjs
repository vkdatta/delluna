export const name="lock-open-light";
export const id="dl_fdf4042cfcb34dd3a6e0";
export const url=new URL("../icons/lock-open-light.svg?v=e1eba91ad3db76f0764214700742b8e6b9210d4bf85f07929edb264bff817f83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
