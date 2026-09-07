export const name="swimming-pool-thin";
export const id="dl_f58120d4e8884637966f";
export const url=new URL("../icons/S/swimming-pool-thin.svg?v=a487153f5510fbc2e4f513d0ee14aa2e76f3f413d62c4227bea8b405b50b35ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
