export const name="signal-zero";
export const id="dl_e59fff0d87114d44ba89";
export const url=new URL("../icons/signal-zero.svg?v=cb0eacfd60226e78c0eac022ab2044f214650c712fea7cddbdec75450d3da9e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
