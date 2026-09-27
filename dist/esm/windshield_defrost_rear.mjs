export const name="windshield_defrost_rear";
export const id="dl_9c6d63de2f4acbfd4cc5";
export const url=new URL("../icons/windshield_defrost_rear.svg?v=037f3263f568f6998af96462f4c4eae6f78886885665df0e3e9ad00ba634064a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
