export const name="number-six";
export const id="dl_167840c292674ce9aa5b";
export const url=new URL("../icons/number-six.svg?v=a079b9bc273dd022f42fb30529ff688cad23dd1877bef690bc7dc474c9f2f637",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
