export const name="article_shortcut";
export const id="dl_4e61bfa75ce916c5d849";
export const url=new URL("../icons/article_shortcut.svg?v=f5bc17bc5880d85878b9da81054c02659df0ff2e1ee766e55ed6413cb1544dd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
