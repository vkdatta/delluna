export const name="health_and_beauty-fill";
export const id="dl_ed2ad11b75605834f059";
export const url=new URL("../icons/health_and_beauty-fill.svg?v=4ced12159fe6980f7b922e6bd93f2993500790f8f520e901278153c2975df0c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
