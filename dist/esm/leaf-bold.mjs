export const name="leaf-bold";
export const id="dl_238d59244da9474da85f";
export const url=new URL("../icons/leaf-bold.svg?v=7baa5714600c1f9eb082cc97ebdcf4950ebae1d4da4caef8ce87d23925741f7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
