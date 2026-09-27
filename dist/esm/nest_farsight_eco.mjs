export const name="nest_farsight_eco";
export const id="dl_8fd916f2a800906388a4";
export const url=new URL("../icons/nest_farsight_eco.svg?v=35987576e29298b49c71251f486654a5359771efb5625369f166ff1238c59805",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
