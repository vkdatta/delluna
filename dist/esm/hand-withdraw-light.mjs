export const name="hand-withdraw-light";
export const id="dl_bd38256f22bf419a8646";
export const url=new URL("../icons/hand-withdraw-light.svg?v=bb05fd1996d854ff47a7e0ce0075c65d0ab19fe1db003142e8da2d9c1b1b2cbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
