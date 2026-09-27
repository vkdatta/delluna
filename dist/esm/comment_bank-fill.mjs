export const name="comment_bank-fill";
export const id="dl_4f1c5cb35800c979ec1d";
export const url=new URL("../icons/comment_bank-fill.svg?v=2b552f68415057df7131e158d791b61ddb101a98cdf65962b7da30d321fbd612",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
