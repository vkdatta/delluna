export const name="radio-thin";
export const id="dl_f01912c3e3b649e58429";
export const url=new URL("../icons/radio-thin.svg?v=61109a8bcf99ebb10f38984ea4bfdc340c7a746a5b0cfd00855c0e9f0fc10f08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
