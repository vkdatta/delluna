export const name="arrow-bend-double-up-left-bold";
export const id="dl_0caa5344f5794d7e82cd";
export const url=new URL("../icons/arrow-bend-double-up-left-bold.svg?v=15f0bfb283849279daf448a71f004ba9ff080999d4acb8c06b506134c3a776ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
