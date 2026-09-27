export const name="join-fill";
export const id="dl_d7279f01c4fc2b25e379";
export const url=new URL("../icons/join-fill.svg?v=54b494224a42bb4ce973c58cd40acf4cd9f77a3dea69a986a4ea2edf64bd77f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
