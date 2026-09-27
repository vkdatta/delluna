export const name="lucid_1-circle-dashed";
export const id="dl_d1cca5234d57451aae57";
export const url=new URL("../icons/lucid_1-circle-dashed.svg?v=892742c07778e2e44e2fc38b8d4f01c2b053e93d7a6667ece32a4f13c0bb1433",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
