export const name="lucid_2-folder-up";
export const id="dl_4eb426104ee64160a087";
export const url=new URL("../icons/lucid_2-folder-up.svg?v=96579aed6cd3ffe283fd165869cd74872b992af624dc894258764fb5e778288e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
