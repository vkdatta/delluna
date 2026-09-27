export const name="tennis-ball-fill";
export const id="dl_2f519fd41060c8ad16f0";
export const url=new URL("../icons/tennis-ball-fill.svg?v=902ba2b31f421b08df1f3cf10010df79fe270178830d49ac967ed00abcfee273",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
