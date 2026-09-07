export const name="bug-bold";
export const id="dl_0caa701d6ccc4188873b";
export const url=new URL("../icons/bug-bold.svg?v=01306c64b9103ca5d88567eb4d3f2f3f9e1cb3e889f45985ee78b91bb3e3c606",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
