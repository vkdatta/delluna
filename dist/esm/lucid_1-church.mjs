export const name="lucid_1-church";
export const id="dl_381b0097a4234eadb0a5";
export const url=new URL("../icons/lucid_1-church.svg?v=f6e0f49471565a7a8197c03f0c237ab2203a96d529f9f74fb5b0ea45ffe75c94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
