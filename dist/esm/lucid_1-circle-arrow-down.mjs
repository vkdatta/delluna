export const name="lucid_1-circle-arrow-down";
export const id="dl_9bb9aaa240644edda2a6";
export const url=new URL("../icons/lucid_1-circle-arrow-down.svg?v=9bf7d670ecca93e4e700d7917dfc384ecf57d326dfd80ddd043eea090e443281",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
