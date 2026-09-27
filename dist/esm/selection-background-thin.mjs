export const name="selection-background-thin";
export const id="dl_257aa73648eb1b1d9d05";
export const url=new URL("../icons/selection-background-thin.svg?v=19c17c76cef3502923b46d2984b3ffbc65da60580c5e4b478e5a17863fb49ecb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
