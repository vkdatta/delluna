export const name="fish-simple-bold";
export const id="dl_91bdd70ee76d42eb80ae";
export const url=new URL("../icons/fish-simple-bold.svg?v=4516c6dd4040165b457664528255e1079ebb33a298b84cf1da62286b91d2975f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
