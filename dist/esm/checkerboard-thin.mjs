export const name="checkerboard-thin";
export const id="dl_12c7199f1cbf4f899d2a";
export const url=new URL("../icons/checkerboard-thin.svg?v=48f9a5a3aeb20ca8bc57aa9c412118604ca9e0fc555ead0028803b1ded146f9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
