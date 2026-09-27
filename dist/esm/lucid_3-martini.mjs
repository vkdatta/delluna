export const name="lucid_3-martini";
export const id="dl_b93bd9f85add4cf68aab";
export const url=new URL("../icons/lucid_3-martini.svg?v=8d831c75a08d1a0b56e9e730235b170256e23c0abff1e43881ca7f23fc9d218c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
