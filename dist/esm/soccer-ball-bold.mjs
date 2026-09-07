export const name="soccer-ball-bold";
export const id="dl_e7d7c800813f4f838763";
export const url=new URL("../icons/S/soccer-ball-bold.svg?v=7016c8b5f224a28ede663c7e25823bc890bef696c6629a5fe1610fcf94ffc73d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
