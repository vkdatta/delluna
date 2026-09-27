export const name="stack-duotone";
export const id="dl_1ad038136f3e30e6ece6";
export const url=new URL("../icons/stack-duotone.svg?v=3c4f6bd5a54081fb632cfa9a5fd976e2f8e51af0a52fdddb95cf516b87349b08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
