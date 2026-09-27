export const name="arrow-square-down-left-bold";
export const id="dl_6a8b647217794533920a";
export const url=new URL("../icons/arrow-square-down-left-bold.svg?v=079ce531ebd3260fd8078be7386655049cd051908b9db4ba4b5091230ce9783d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
