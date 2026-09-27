export const name="view_comfy_alt";
export const id="dl_06a7b7fb646db8210001";
export const url=new URL("../icons/view_comfy_alt.svg?v=e0f534846c772b2387554686a6ee13ffa5d7c75f8b61b0a5995e0bf2eac479c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
