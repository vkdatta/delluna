export const name="lucid_2-handbag";
export const id="dl_5203921295ee4e3b93d7";
export const url=new URL("../icons/lucid_2-handbag.svg?v=7e5a33f7c8869caa70abfc94d1645071be4196547b6224a3a76e1a6eccf9fd67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
