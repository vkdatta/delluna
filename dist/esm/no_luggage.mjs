export const name="no_luggage";
export const id="dl_782f42a4e5f39c4ed472";
export const url=new URL("../icons/no_luggage.svg?v=dfebb6793b0a99a9a31dfe8809b4ec8250b26533810cdc5ba0a884b6e3574b93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
