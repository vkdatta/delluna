export const name="real_estate_agent-fill";
export const id="dl_ba64e2afbeed4c689022";
export const url=new URL("../icons/R/real_estate_agent-fill.svg?v=7a70525ab9bcf3c193b4b7bbb7925e3f7515d06e3b06cc905ea71094096f4a7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
