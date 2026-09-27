export const name="picture-in-picture-bold";
export const id="dl_41004d524d2f4255a797";
export const url=new URL("../icons/picture-in-picture-bold.svg?v=8653119841ea721bf8e0355e017992d538ec9ce37832a823383c8bbaf0e1e374",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
