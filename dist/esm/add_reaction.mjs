export const name="add_reaction";
export const id="dl_5ce581d7ee0d4cfb6f25";
export const url=new URL("../icons/add_reaction.svg?v=f18539313ae20b1965e2792da1e73f83dd4675535af1349ed056d3156a0b732b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
