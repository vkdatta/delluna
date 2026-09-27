export const name="lucid_2-file-heart";
export const id="dl_cf9fca5bcbed4b85a798";
export const url=new URL("../icons/lucid_2-file-heart.svg?v=94dc2b335df3bcbfcf0840645422c376ff28fddb0254c02cd5f661f340af53c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
