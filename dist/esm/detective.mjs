export const name="detective";
export const id="dl_53b25138fe55473ba84f";
export const url=new URL("../icons/detective.svg?v=a7599ab15c1fe50bcb5c1e941153003d356161b6cb03116441dc91b71234a761",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
