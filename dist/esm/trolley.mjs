export const name="trolley";
export const id="dl_f7ed4d0129dd7ac846da";
export const url=new URL("../icons/trolley.svg?v=608085b5ef785798c28bef944146931ec302ae9934f41d9be3b07f13aafa3fff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
