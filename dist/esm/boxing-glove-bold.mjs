export const name="boxing-glove-bold";
export const id="dl_33f059911e5c4d02b821";
export const url=new URL("../icons/boxing-glove-bold.svg?v=79070cd4cfa6e64479b633d8bf92cd3804d262b53492470dd15be7df3d910a10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
