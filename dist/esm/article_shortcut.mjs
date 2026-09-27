export const name="article_shortcut";
export const id="dl_332522d26f68cdfe83ea";
export const url=new URL("../icons/article_shortcut.svg?v=80866bad81974a06b53b7c68fcd85503396d9d4d76d08e59200de6fd35529214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
