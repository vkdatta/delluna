export const name="wallet-bold";
export const id="dl_23aeac93661475944beb";
export const url=new URL("../icons/wallet-bold.svg?v=d8d4a08baa4968ddfed5bfc89fa3e3c9967a4bb4286c6b89a835466a1caf0740",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
