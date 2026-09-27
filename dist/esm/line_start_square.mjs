export const name="line_start_square";
export const id="dl_6ea28ab62c1582242033";
export const url=new URL("../icons/line_start_square.svg?v=3040e54f3e729313eed97c960d27899f559d0f7beef0dfcbbdefbefedd12098e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
