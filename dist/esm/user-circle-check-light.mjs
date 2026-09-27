export const name="user-circle-check-light";
export const id="dl_07edac2f788b7041b380";
export const url=new URL("../icons/user-circle-check-light.svg?v=56e921ecad77b4ec7782949f0d4d35374d5cf02bfb6b1f6b6abaea9cfadcdf04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
