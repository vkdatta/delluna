export const name="folders-light";
export const id="dl_0dcbe10a07d14359b382";
export const url=new URL("../icons/folders-light.svg?v=5f56d2e9f8682a719866bbc86df2a1501769f47e9e85ab8f5a37c07d491e7adf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
