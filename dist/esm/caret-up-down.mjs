export const name="caret-up-down";
export const id="dl_cd733bed1fdf43ea906c";
export const url=new URL("../icons/caret-up-down.svg?v=d4de6c889746b4f7c4d859ee317f67006f3994e2c6ab7c63ffb8e5ffc2f135a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
