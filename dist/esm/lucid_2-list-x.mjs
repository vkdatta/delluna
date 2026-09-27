export const name="lucid_2-list-x";
export const id="dl_c91b381fb6f54f278e90";
export const url=new URL("../icons/lucid_2-list-x.svg?v=fc325565c510da128a7f433eed77a170228f1dfd2b656860c500c5ad6188af30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
