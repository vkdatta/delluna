export const name="stack-plus";
export const id="dl_324de419c8303478d880";
export const url=new URL("../icons/stack-plus.svg?v=0c0178d61dd62d91d4fc42da6a48bc38ff5b28e8504feb19b48ca19722caae08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
