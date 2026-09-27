export const name="tv_with_assistant-fill";
export const id="dl_da0bdff55115b6a9e7b9";
export const url=new URL("../icons/tv_with_assistant-fill.svg?v=aca53a7c0fcef55f34a987fa7a68f7e82f546819023cc92ccf653c0abb3b96bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
