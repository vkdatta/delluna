export const name="google-chrome-logo-fill";
export const id="dl_05ed6ccca70f4929b451";
export const url=new URL("../icons/google-chrome-logo-fill.svg?v=8f73f6d0b3be2c9c14184d92e3f23c54355e3e74cb3ce7ae70c6e3470fac412b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
