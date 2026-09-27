export const name="atom";
export const id="dl_0328e9ddfe7440f4adf5";
export const url=new URL("../icons/atom.svg?v=94be16f751db6f054637e81b836b7fbc7b57baa1f9b331ba2f5d25e54b6b5d24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
