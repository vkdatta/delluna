export const name="military_tech";
export const id="dl_3f755f56154dfa770d80";
export const url=new URL("../icons/military_tech.svg?v=733df8404e8c5fe9a3d4fc212d28b6241c76b6f7003b02bfaa4c6880e54b12b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
