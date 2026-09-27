export const name="spotify-logo-thin";
export const id="dl_8a8c2e3f82d126d57a9e";
export const url=new URL("../icons/spotify-logo-thin.svg?v=08c2ea8128c6acc47684d83002b3993114f8d3eb36d2e4fffbfc40c0610ad546",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
