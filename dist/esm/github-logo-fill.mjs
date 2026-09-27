export const name="github-logo-fill";
export const id="dl_2438f7e4234e43ecb9f7";
export const url=new URL("../icons/github-logo-fill.svg?v=7def746aba3506b786a33d0106f15f4ef1678cf5f7f6f273cd6eae7977cfc24e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
