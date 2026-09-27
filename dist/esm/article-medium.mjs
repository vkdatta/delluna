export const name="article-medium";
export const id="dl_5779a6bdd06d4e8faa24";
export const url=new URL("../icons/article-medium.svg?v=c778a8cb35bb076c7eb9d6bd7f799c33824b0f24ab0f72cc6e87f38fa6d5f8db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
