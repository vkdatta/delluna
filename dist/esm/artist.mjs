export const name="artist";
export const id="dl_418cd44e07423f9b2052";
export const url=new URL("../icons/artist.svg?v=46763562133c3d257efe8b4e896b538489ea1a5f4e5ad535bb67bf661da10bdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
