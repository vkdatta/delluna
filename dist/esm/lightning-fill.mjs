export const name="lightning-fill";
export const id="dl_436113205fa24ad4bd0d";
export const url=new URL("../icons/lightning-fill.svg?v=cd905510763080ce66c872878d91604a44de01974565d0349db24ac0984c2dfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
