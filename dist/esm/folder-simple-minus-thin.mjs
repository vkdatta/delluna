export const name="folder-simple-minus-thin";
export const id="dl_edf3ecc3768844f28f63";
export const url=new URL("../icons/folder-simple-minus-thin.svg?v=138e09a0dd1ae694d65a754e2807668a0c9e11009653d8edb7500cd51713c613",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
