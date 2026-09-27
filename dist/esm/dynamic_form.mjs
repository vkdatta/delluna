export const name="dynamic_form";
export const id="dl_a449243bc6a0ba90c65b";
export const url=new URL("../icons/dynamic_form.svg?v=b7ade5de570cc9019ea1a10a579b07757ba2f24b73af3103ec68ee54f560c38f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
