export const name="cursor-text-fill";
export const id="dl_34b946dd80404a44bd52";
export const url=new URL("../icons/cursor-text-fill.svg?v=d113450f9671be8f26bd91482d7b68f79802266d0e21a49cd33d6c3a242cb5d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
