export const name="chair-thin";
export const id="dl_5172f44321a943c19569";
export const url=new URL("../icons/chair-thin.svg?v=a478c5ca5b476df65fc0a25e88bb598b13d9982b2d397e4540c285abc8033902",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
