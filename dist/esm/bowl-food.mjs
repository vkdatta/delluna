export const name="bowl-food";
export const id="dl_492594dd49104bf9a0c5";
export const url=new URL("../icons/bowl-food.svg?v=6f1865ab70430e3647fa4bc06b164a813c6fa4f0438a84b035728f2a8951b578",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
