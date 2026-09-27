export const name="lucid_2-folder-git-2";
export const id="dl_d7261cf68c0c409ca0d1";
export const url=new URL("../icons/lucid_2-folder-git-2.svg?v=ea8d51f543b527c8b54437600406064ef4b3e62e33544e2fa1f5c8da541ab64a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
