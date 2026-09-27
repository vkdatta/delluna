export const name="lucid_1-align-center-vertical";
export const id="dl_a50dd4630f1d4a7b84db";
export const url=new URL("../icons/lucid_1-align-center-vertical.svg?v=c88646d92924f6c9508d978f39eaf361b997b9591b31c4f34b0ae825c592c852",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
