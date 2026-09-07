export const name="close_circle";
export const id="dl_89b8c304570f4101bae5";
export const url=new URL("../icons/all_60_named_svgs/close_circle.svg?v=422a1cabd8560cd70d9b755f225ad52ab45cab78f7bcc535e0279a2b5f5eb458",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
