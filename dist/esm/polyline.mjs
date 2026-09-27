export const name="polyline";
export const id="dl_0e5a3bd5c99684f75430";
export const url=new URL("../icons/polyline.svg?v=c357d7fc951c8bafc90d76dd9d20fbe98aec15f96518d41d0f05e4cb1ff9e73c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
