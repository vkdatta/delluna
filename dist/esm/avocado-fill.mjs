export const name="avocado-fill";
export const id="dl_a8c5f3f8be9a4e81bd83";
export const url=new URL("../icons/avocado-fill.svg?v=459c489ce9891cc194c9b60cb6c69e8e7a7d179798df6c13e2fa34b49c9ebd42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
