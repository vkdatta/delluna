export const name="basketball-duotone";
export const id="dl_12a13cb8341848988023";
export const url=new URL("../icons/basketball-duotone.svg?v=352ebcf721c40a259cf73d2e55e2f38dd9a11887ebf80ce975040af508539511",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
