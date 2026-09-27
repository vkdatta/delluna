export const name="letter-circle-h-bold";
export const id="dl_1eb757768bee45cd8c35";
export const url=new URL("../icons/letter-circle-h-bold.svg?v=67f0704611fa7b6650d755f2a8f0913cec0b7b281c48e13ed85a806a8192ff6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
