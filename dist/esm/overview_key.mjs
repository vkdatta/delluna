export const name="overview_key";
export const id="dl_8fc3acf147b1e6868c81";
export const url=new URL("../icons/overview_key.svg?v=65a278ba32e85532702e0d6ad25d0191cb59a29ba67e385a80eba5ba99c07e9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
