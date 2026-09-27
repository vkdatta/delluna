export const name="rheumatology";
export const id="dl_0a2e03f8ca6b459fb406";
export const url=new URL("../icons/rheumatology.svg?v=8b0c52d7522a28f12bf193e055b2f2d5ff35acb37a334536e64240b288fc9301",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
