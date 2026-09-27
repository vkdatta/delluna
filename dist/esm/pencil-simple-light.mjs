export const name="pencil-simple-light";
export const id="dl_dcd5044f8c3a4f42a1f9";
export const url=new URL("../icons/pencil-simple-light.svg?v=ca893ec264552492f937007dd31e19e7b9728b52f4e30a11e3c826f56227127e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
