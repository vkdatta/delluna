export const name="notepad-bold";
export const id="dl_d6c025e0177c463088d6";
export const url=new URL("../icons/notepad-bold.svg?v=c9ec8cb1aedf8652c210ec42ad7c7a1960e0a6e02772f812e6dce1e399d5fb02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
