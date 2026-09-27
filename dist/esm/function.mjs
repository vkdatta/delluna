export const name="function";
export const id="dl_a61959f1cf4c4dae89c0";
export const url=new URL("../icons/function.svg?v=315ffd029c742705afb425129d236a2357c531b69bdf154134fe074bfad8b032",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
