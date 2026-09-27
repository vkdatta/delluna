export const name="lucid_3-origami";
export const id="dl_93dcaf8ec9cb48abbed3";
export const url=new URL("../icons/lucid_3-origami.svg?v=e12250378c67899893e2a0f6e840cade1a3b5ca2ccefc8ab703cbccbe41d6b58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
