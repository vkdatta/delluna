export const name="atom";
export const id="dl_0328e9ddfe7440f4adf5";
export const url=new URL("../icons/atom.svg?v=03454578d2c719257063e4cd5f71af869832d0346c5ea11a3e00c0b2f5359031",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
