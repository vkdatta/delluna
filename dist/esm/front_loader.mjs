export const name="front_loader";
export const id="dl_52ce113d6aa1d8be727c";
export const url=new URL("../icons/front_loader.svg?v=f6f6280c019b002e6100b955074f8615e076f23510a49963913545463ccd8faa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
