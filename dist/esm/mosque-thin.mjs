export const name="mosque-thin";
export const id="dl_5faacef3cbe4454d8459";
export const url=new URL("../icons/mosque-thin.svg?v=fbdb27e52fe0a8229a6e7eb6c05b6f71619e384d6027ee43e1f12c4515feacdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
