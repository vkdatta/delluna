export const name="polygon-fill";
export const id="dl_db88e50b0b2641478945";
export const url=new URL("../icons/polygon-fill.svg?v=6caeb16db9dda4083ae701c776c022d7a1073daeae9ccb9f25ddf63f849c8464",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
