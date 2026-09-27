export const name="undo";
export const id="dl_d8491ad8a6db4d45edb9";
export const url=new URL("../icons/undo.svg?v=bf79fe066981883fb39d1ba2f6b92de10a8780c7497844aa1c6566e6a30e1086",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
