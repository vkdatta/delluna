export const name="rebase";
export const id="dl_5cc9fa0e78093ae1e5e0";
export const url=new URL("../icons/rebase.svg?v=f3c69a35d466f27673a601e0fbd0a9fd5307f0163a18035cb1afb5883c3a4929",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
