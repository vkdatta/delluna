export const name="label";
export const id="dl_87df24ae127c40b88fba";
export const url=new URL("../icons/label.svg?v=d7cecf95bab02e4ecb9b092377937873b0af582c4db67cd109e1564ebd9688e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
