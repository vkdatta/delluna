export const name="selection-inverse";
export const id="dl_4011225adf1c5643c8e4";
export const url=new URL("../icons/selection-inverse.svg?v=ad1881b424db4fe661acacae3e4bcf28dceeaa616537713c5aaf87d84ef04273",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
