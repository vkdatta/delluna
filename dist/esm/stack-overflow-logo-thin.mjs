export const name="stack-overflow-logo-thin";
export const id="dl_79ace59aadb81f7143a6";
export const url=new URL("../icons/stack-overflow-logo-thin.svg?v=63e2e1fa91909dd2cbf103f604ef4b987895b1ff85fb28a79615b62125db2f3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
