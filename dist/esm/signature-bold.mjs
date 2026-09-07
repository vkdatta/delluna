export const name="signature-bold";
export const id="dl_f54a7ba386e64e839430";
export const url=new URL("../icons/S/signature-bold.svg?v=f340759209d280bc02e4de0dbdb91952e1a610e91efb14beb7126212dbf0d742",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
