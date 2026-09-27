export const name="token";
export const id="dl_988624a946b7c4f03e82";
export const url=new URL("../icons/token.svg?v=b6b19da4a7ead4588b3866fed086ee546ef4cbb8fdde79092eb4487e625a2491",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
