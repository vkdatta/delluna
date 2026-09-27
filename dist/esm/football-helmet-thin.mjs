export const name="football-helmet-thin";
export const id="dl_d656646fcced4cf092cf";
export const url=new URL("../icons/football-helmet-thin.svg?v=07839dee9c9dde716dec2d9feda03522b0addba9eb67afb1822888c0e570d9f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
