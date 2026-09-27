export const name="axe-thin";
export const id="dl_5e092ffa31c04743bddc";
export const url=new URL("../icons/axe-thin.svg?v=1da4374bbed1744a7f0f39c81d495ed699925174dadd66b88bd1154820886eae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
