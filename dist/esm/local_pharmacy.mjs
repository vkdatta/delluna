export const name="local_pharmacy";
export const id="dl_e8d66c0aea8a3f25e5a3";
export const url=new URL("../icons/local_pharmacy.svg?v=05b40c85618087d9da2b90a6ca4d91eeff532e566fd752615063d51105ed65cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
