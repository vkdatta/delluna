export const name="early_on";
export const id="dl_0a6b148506244ff88881";
export const url=new URL("../icons/E/early_on.svg?v=2da98d874b0e38a5e46f042509d0d835edf0ca2db446e355903f2cc6740d3306",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
