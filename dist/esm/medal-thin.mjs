export const name="medal-thin";
export const id="dl_d2269b3bc50045009be6";
export const url=new URL("../icons/medal-thin.svg?v=3dc3134135a5d101550207fa8cc14d4d5e2e6d75bb43587c541daa85e1f665b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
