export const name="arrow-line-down-left-light";
export const id="dl_ff6711cae6ad459183bd";
export const url=new URL("../icons/arrow-line-down-left-light.svg?v=38f2774dbe8a68e19797adc32e71bb64f4120e1511bd823ee9d575a2cf810f05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
