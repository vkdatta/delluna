export const name="rows-light";
export const id="dl_a425d4c0d79345619b95";
export const url=new URL("../icons/rows-light.svg?v=a4905a46634b293c50aad69a5434949eb35adfcaff1313a2e2e7269ac965781f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
