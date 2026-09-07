export const name="lucid_2-lamp-floor";
export const id="dl_eb7983fed44e40ddb2c4";
export const url=new URL("../icons/lucid_2-lamp-floor.svg?v=de8da93790291966147d4813fb61f00ce1acb89f92c72c90dbf273f78e33a08c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
