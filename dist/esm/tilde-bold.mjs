export const name="tilde-bold";
export const id="dl_2cd2044f2dd19e59bb0a";
export const url=new URL("../icons/tilde-bold.svg?v=25afc282710ea800689beb2acc98a4fc77bfc59e0e69804e1978830449c89c16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
