export const name="light_group";
export const id="dl_dccf6b3007354db8b67d";
export const url=new URL("../icons/L/light_group.svg?v=7f95c57455d3455d99124461f6b76661b38348e853c1c51cc7c35ba49b7ee9f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
