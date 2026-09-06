export const name="person-simple-tai-chi-bold";
export const id="dl_c1db6ff9486a418183de";
export const url=new URL("../icons/person-simple-tai-chi-bold.svg?v=f28c0436cab7dadfc640d72b3c59f4a8f2f082244408c42b1a6ab55e801c3eb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
