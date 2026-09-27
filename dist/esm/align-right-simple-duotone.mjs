export const name="align-right-simple-duotone";
export const id="dl_e393c5018af44edfa6eb";
export const url=new URL("../icons/align-right-simple-duotone.svg?v=459dd133c7785d91199021ac5b3c33f527ac636f554a1f7f15f89559a2da8c74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
