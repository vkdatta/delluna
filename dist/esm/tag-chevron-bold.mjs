export const name="tag-chevron-bold";
export const id="dl_f08cd0c3fa6c53fc5d48";
export const url=new URL("../icons/tag-chevron-bold.svg?v=19457b37857d9609c961fee96a603ee18c481020d88f1535ce90b9a17f10c35f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
