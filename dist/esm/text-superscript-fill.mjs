export const name="text-superscript-fill";
export const id="dl_725e0a51c504e61353d9";
export const url=new URL("../icons/text-superscript-fill.svg?v=fb5fec4de41ad1b4c1d74a52458895b4f813202d4da6efeec642707d75356c4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
