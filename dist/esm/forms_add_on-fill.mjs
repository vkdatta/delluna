export const name="forms_add_on-fill";
export const id="dl_de8a4dde3299f8bebb63";
export const url=new URL("../icons/forms_add_on-fill.svg?v=4f301908823bcab35c77651dbe512d430ad9db43a5facd763c505e6ca29335e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
