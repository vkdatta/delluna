export const name="arrow-circle-up-left-bold";
export const id="dl_e736fefd2186481f9f1c";
export const url=new URL("../icons/arrow-circle-up-left-bold.svg?v=8619e5f956390876b365f61e7e79d958b7a06cd8c64a6cc8cc90ea5f469b066f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
