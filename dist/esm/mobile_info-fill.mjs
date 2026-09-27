export const name="mobile_info-fill";
export const id="dl_ba98ca98e544bcc91474";
export const url=new URL("../icons/mobile_info-fill.svg?v=8d18eb16eca1f87a583bdbfab7f1eb5305cdb66ea56003c3186a2097641dd09d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
