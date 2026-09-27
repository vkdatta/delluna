export const name="lucid_2-hand-heart";
export const id="dl_311e22ce355848f48e98";
export const url=new URL("../icons/lucid_2-hand-heart.svg?v=96a198743104557c4ac79da971d8d6beb199cf4b3af03168491f0f813cbf50cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
