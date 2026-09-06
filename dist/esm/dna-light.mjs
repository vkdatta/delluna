export const name="dna-light";
export const id="dl_b9e857c18c6b4494ac32";
export const url=new URL("../icons/dna-light.svg?v=b0055280aee0eb4cea24a408ad97e5a7bf20e2e8f550c3dbe81ae126dd27b186",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
