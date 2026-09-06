export const name="gender-transgender-bold";
export const id="dl_2a8f0533c4be4620b6b2";
export const url=new URL("../icons/gender-transgender-bold.svg?v=cf08eeca89a47b1eec7a14dcb87fea62b7a086868e23ff5bfdb57787e3d2b9f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
