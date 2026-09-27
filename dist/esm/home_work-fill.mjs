export const name="home_work-fill";
export const id="dl_d93a762873f23adad5dc";
export const url=new URL("../icons/home_work-fill.svg?v=7a401b7e12f749ece78f68120cfcebf4a82c9d61ee812c6ec3d858a874cad52c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
