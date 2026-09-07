export const name="smiley-angry";
export const id="dl_a13f3e94e19546629bbc";
export const url=new URL("../icons/S/smiley-angry.svg?v=7f2c6786423d9b5fe6f9f3f97b7a50064d5ca0ce78ef21d0d43ca1d28111dd0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
