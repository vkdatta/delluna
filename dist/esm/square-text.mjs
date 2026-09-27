export const name="square-text";
export const id="dl_1844f3bcefe4450a873c";
export const url=new URL("../icons/square-text.svg?v=ab3807375621c7c4ca819340c8221f683d6ca3a0bdea0ebff8e6aa4a185a7fc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
