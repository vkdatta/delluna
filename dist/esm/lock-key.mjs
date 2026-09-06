export const name="lock-key";
export const id="dl_07f1e3c1cfb6413486fb";
export const url=new URL("../icons/lock-key.svg?v=a8177687fb7b376afa1cf3bc0b16599c91b96a323687e2145f772b93ed0f2c95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
