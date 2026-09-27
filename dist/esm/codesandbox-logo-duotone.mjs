export const name="codesandbox-logo-duotone";
export const id="dl_c7ad1bdc9d8c4dc69c6a";
export const url=new URL("../icons/codesandbox-logo-duotone.svg?v=2514fc317f86058f2abbd87d14d40ded46ea7a65c78afbb69e96b584a7ab7eff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
