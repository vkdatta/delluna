export const name="scale";
export const id="dl_13a932ef0c8981c75e1c";
export const url=new URL("../icons/scale.svg?v=d9ba21c0a8a30775d0e6b9ec64d30c5af2b506a67674547c4bd38748b4b4a46f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
