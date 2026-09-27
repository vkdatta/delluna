export const name="share-fat-fill";
export const id="dl_1c3631f98b5f9b61afa6";
export const url=new URL("../icons/share-fat-fill.svg?v=c01573ce6bd1fcd078fe61811323874eb22ba25e0d2a33aeaf09989ddd4bb567",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
