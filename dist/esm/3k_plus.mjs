export const name="3k_plus";
export const id="dl_9b490547ba164d789065";
export const url=new URL("../icons/3/3k_plus.svg?v=a0ba00d4e7183008277e9e9bdc7eea01b0ca45c8c8e27bdcd00f49a475a3da42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
