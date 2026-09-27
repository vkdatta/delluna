export const name="communication";
export const id="dl_a18161e67178d01ecbf8";
export const url=new URL("../icons/communication.svg?v=b1c7f3c1c1199a6c53d020feba22d8a069b6455d3dea8b0a197f962fbf6d5af9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
