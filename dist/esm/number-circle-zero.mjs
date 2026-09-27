export const name="number-circle-zero";
export const id="dl_545ddd3d0560421986e1";
export const url=new URL("../icons/number-circle-zero.svg?v=90755c45968d515938a51b99552a03efd7f41cec449bd03149478abfde6dd061",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
