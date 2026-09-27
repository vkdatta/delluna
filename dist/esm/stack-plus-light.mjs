export const name="stack-plus-light";
export const id="dl_03882e1f234fd608da14";
export const url=new URL("../icons/stack-plus-light.svg?v=4ee55912f31792a6ccea7b45c5df5dfac8db2923aa1abfb7b6a8420bdcba57bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
