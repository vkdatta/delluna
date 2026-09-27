export const name="instagram-logo-light";
export const id="dl_f5272735f3fb44528515";
export const url=new URL("../icons/instagram-logo-light.svg?v=84fa48371068a907c0ebf1d295c581eb2467e463c6d61ea3a3b5e0e6bf56348e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
