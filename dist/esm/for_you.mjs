export const name="for_you";
export const id="dl_f35d491283792e1989ce";
export const url=new URL("../icons/for_you.svg?v=c2e78cb4366528a272663c12404c470f1eddf61478aba1a9fee429b17ebd19f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
