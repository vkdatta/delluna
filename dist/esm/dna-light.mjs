export const name="dna-light";
export const id="dl_b9e857c18c6b4494ac32";
export const url=new URL("../icons/dna-light.svg?v=9ab00428ff20bbe0536c40dbb92dc6f226c6fc829f8a748f9551715e7959f243",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
