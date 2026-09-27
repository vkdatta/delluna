export const name="number-nine-light";
export const id="dl_5dcd6af46bea4e2ea0a8";
export const url=new URL("../icons/number-nine-light.svg?v=3ce4009c9c53318be9063430d8dd45cb566df0e0123472121534a925f9cceae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
