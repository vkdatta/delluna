export const name="shield-star-duotone";
export const id="dl_32684bb1afbab6dab6b6";
export const url=new URL("../icons/shield-star-duotone.svg?v=63745f4b541b4390640df406574487a527ba5e7142a048ec23ce044fcacc84f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
