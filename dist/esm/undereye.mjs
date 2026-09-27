export const name="undereye";
export const id="dl_00b7ab47312b51c13b02";
export const url=new URL("../icons/undereye.svg?v=b7a1e70860b630eb539bedd3806b46092e4c4fe732d4314523a0bb8c89de4625",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
