export const name="square-pen";
export const id="dl_bfde6865c3284c9b8cec";
export const url=new URL("../icons/square-pen.svg?v=89e0da61c6a5cca49e4c6e2f1fcb8e08b9d9ef816ddf033c58648454d49bcca2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
