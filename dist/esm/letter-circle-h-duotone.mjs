export const name="letter-circle-h-duotone";
export const id="dl_12ecc8c56d7d485a8c9b";
export const url=new URL("../icons/letter-circle-h-duotone.svg?v=fd60d99d36478656654d03f80f476c9358606be87067a652ac9f919478825ec4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
