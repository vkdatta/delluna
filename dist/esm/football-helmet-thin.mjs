export const name="football-helmet-thin";
export const id="dl_d656646fcced4cf092cf";
export const url=new URL("../icons/football-helmet-thin.svg?v=e71c1432e3f0d9ef22e78bd6624490f4c5f3cf7171f4354c07c7574607a0f308",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
