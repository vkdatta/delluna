export const name="lucid_2-dollar-sign";
export const id="dl_b9326036c0a343b2bec5";
export const url=new URL("../icons/lucid_2-dollar-sign.svg?v=abd9ca2bd920e6abbe604a06ed755907caac1959a92da27af736e2c749b890e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
