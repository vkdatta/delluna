export const name="kimi";
export const id="dl_cfad3909365ca49fd381";
export const url=new URL("../icons/kimi.svg?v=b10d99568bde60bd41aa4ff9c8614aa9481aeb26844a86879880afe60fd575c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
