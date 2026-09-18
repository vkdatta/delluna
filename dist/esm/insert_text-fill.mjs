export const name="insert_text-fill";
export const id="dl_9a616405bea347e38ab9";
export const url=new URL("../icons/insert_text-fill.svg?v=554aab6e034f1c31a2f153607cc58175b6ef0349d9a78a31d6c4a4fccfb18e60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
