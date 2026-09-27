export const name="shower-light";
export const id="dl_c8bbfb3df68ddc2f3bdb";
export const url=new URL("../icons/shower-light.svg?v=b3c0444681de90576a989029a3b29e79c320a5e4fc72e89d39707c503b5dfe86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
