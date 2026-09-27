export const name="circle";
export const id="dl_78d3e9d0a54c487e994c";
export const url=new URL("../icons/circle.svg?v=0d47112e9890644e67e72854bc4499079e0447a6dc1bd6684f336a8c91fcdae2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
