export const name="qr-code-bold";
export const id="dl_5fabf208b1a449018f53";
export const url=new URL("../icons/qr-code-bold.svg?v=dad17994a8ed8af0a36ee79ccaf0151f10ac063cfa7a385ac40b87fe25ae1d27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
