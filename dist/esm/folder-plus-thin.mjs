export const name="folder-plus-thin";
export const id="dl_0a6293cb55fe457cbd4d";
export const url=new URL("../icons/folder-plus-thin.svg?v=30a1800b6e5e723fc51c8b1dbc2a24fbf2759bde3645ff189db8c771078a1a88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
