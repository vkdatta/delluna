export const name="gemini";
export const id="dl_bffb374638a746f68e6d";
export const url=new URL("../icons/gemini.svg?v=7ca4750df65ec6445c8c313dc55187680a10293e83ec4cab0d1b548810659fd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
