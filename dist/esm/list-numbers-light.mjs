export const name="list-numbers-light";
export const id="dl_97745c343185445eae41";
export const url=new URL("../icons/list-numbers-light.svg?v=789815f6d4bc229fbd5462f65ec896a205d7b77279c33e3ad1376475e0d499cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
