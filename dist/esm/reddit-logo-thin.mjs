export const name="reddit-logo-thin";
export const id="dl_edadc7b2b3bd411da2fc";
export const url=new URL("../icons/reddit-logo-thin.svg?v=ee68f40a08f586aa382dd2c78b10357bd8e6e3022464b783925827a10d48a480",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
