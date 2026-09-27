export const name="arrow-fat-up-duotone";
export const id="dl_7a8d3aea476a4ad2a973";
export const url=new URL("../icons/arrow-fat-up-duotone.svg?v=b3a8035c2554ce9ce3a90c157d9154f5af72ea66ee4319c42a8a9e148ca21152",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
