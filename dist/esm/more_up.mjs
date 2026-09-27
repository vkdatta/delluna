export const name="more_up";
export const id="dl_c9d118faf4192a12cc76";
export const url=new URL("../icons/more_up.svg?v=5bc854435bd4ea20256d5538cd2dd1a787ca7f8684f8065ff37327078798bfcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
