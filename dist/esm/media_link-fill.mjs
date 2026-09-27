export const name="media_link-fill";
export const id="dl_43153d778eda6d23d1bc";
export const url=new URL("../icons/media_link-fill.svg?v=4f59421bafccf1e6fe5a7b5fb852309b98d9e47ab61b8b49df572d1e0aa184e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
