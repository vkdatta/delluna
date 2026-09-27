export const name="microsoft-word-logo-duotone";
export const id="dl_7af457df61544a22b98b";
export const url=new URL("../icons/microsoft-word-logo-duotone.svg?v=e05a3d056ca3a04ffc5ce33d87144f4153b46e8681386984bcda3c9479e65903",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
