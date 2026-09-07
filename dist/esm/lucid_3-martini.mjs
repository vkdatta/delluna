export const name="lucid_3-martini";
export const id="dl_b93bd9f85add4cf68aab";
export const url=new URL("../icons/lucid_3-martini.svg?v=dd38e37dec7bdcafa8e62388f5d842d1ad70864689eace073cd7426f5794d41b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
