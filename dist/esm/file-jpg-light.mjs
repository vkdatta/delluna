export const name="file-jpg-light";
export const id="dl_28b14f7b32994c499791";
export const url=new URL("../icons/file-jpg-light.svg?v=7bbe591312f8b8ea0aae4ff2068f1121c41cdba88d56f59b91ad273560392694",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
