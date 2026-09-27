export const name="factory-fill";
export const id="dl_d2f412e63c074e108d0d";
export const url=new URL("../icons/factory-fill.svg?v=9ad1d7a43bed4f2722415ca4247d1237ef1fcaa767a1ae19d78cd7c49f759b98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
