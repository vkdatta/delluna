export const name="microsoft-powerpoint-logo";
export const id="dl_ef7eced5c049463c94b9";
export const url=new URL("../icons/microsoft-powerpoint-logo.svg?v=13157250ac685387d67ec1ad782dcde6bad84d8cd313c5023ab8b037c7bcf5f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
