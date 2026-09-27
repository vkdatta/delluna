export const name="network-slash-bold";
export const id="dl_5e5c123d41e448aa9514";
export const url=new URL("../icons/network-slash-bold.svg?v=72d1315c7b8003f539a381f5ffc107274785af06d0c95aef041f4689ede12e65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
