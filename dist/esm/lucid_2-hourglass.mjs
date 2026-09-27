export const name="lucid_2-hourglass";
export const id="dl_52621c8e50184cb4bdcf";
export const url=new URL("../icons/lucid_2-hourglass.svg?v=4aca5664662d66bc0341a8b8952580b2cadef78075e25898b6443c72e473c195",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
