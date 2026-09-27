export const name="gradient-thin";
export const id="dl_557ba3917d954e52b5f1";
export const url=new URL("../icons/gradient-thin.svg?v=2d82dfbe07b4c2512c1049202f65536f45678a045a6d4db8eeaf5c6bcca28fe3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
