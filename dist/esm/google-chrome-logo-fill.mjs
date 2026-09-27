export const name="google-chrome-logo-fill";
export const id="dl_05ed6ccca70f4929b451";
export const url=new URL("../icons/google-chrome-logo-fill.svg?v=5104364fe9d6f0d8ff9229172f324bc283872e71459342121a73145f565bf9ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
