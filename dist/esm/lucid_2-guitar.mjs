export const name="lucid_2-guitar";
export const id="dl_63c8daf2b0bf479484ab";
export const url=new URL("../icons/lucid_2-guitar.svg?v=b1d0802e6c902ac681df263b3d263b5f8e3ede17a7f4c478edd0d6c8d77b59c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
