export const name="cpu-bold";
export const id="dl_6aa218a2f4594856877b";
export const url=new URL("../icons/cpu-bold.svg?v=365fc0bb417d2222ea63f92c7afb8c854bb1b77e024327f0eb3ba062fef6c60b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
