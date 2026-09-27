export const name="factory-bold";
export const id="dl_d6a2f6d282e9499b8f5a";
export const url=new URL("../icons/factory-bold.svg?v=3bf816d477a0b80c14cbc066f0be63f355e06466ae2b8aae5ead6e5184c98ae6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
