export const name="notepad-fill";
export const id="dl_e84b1dee0eab4a0abda8";
export const url=new URL("../icons/notepad-fill.svg?v=8ca7a64fd01ce601b9ed7d4980def497d2d672e794c3e32b58d63e7287af979d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
