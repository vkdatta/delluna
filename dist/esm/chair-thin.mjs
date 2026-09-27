export const name="chair-thin";
export const id="dl_5172f44321a943c19569";
export const url=new URL("../icons/chair-thin.svg?v=892a02046b8455dea3364416c588bcf7062cbdc96a8a3b1947001f67255e4210",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
