export const name="smiley-light";
export const id="dl_1eba7a3016dd1ec388de";
export const url=new URL("../icons/smiley-light.svg?v=bd50371ad4c052a8ae97cc58244479b684da6643ccff41c09c951c56e907ad77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
