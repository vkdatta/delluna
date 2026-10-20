export const name="lign-end-vertical";
export const id="dl_1edcf176291646139203";
export const url=new URL("../icons/lign-end-vertical.svg?v=28951238d27c25a730644757ffa211679390d1d9188068d8f6406d3be4ea5fba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
