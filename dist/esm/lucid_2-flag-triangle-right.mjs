export const name="lucid_2-flag-triangle-right";
export const id="dl_d78ba72fc5a84b429566";
export const url=new URL("../icons/lucid_2-flag-triangle-right.svg?v=fc87da8e403db540f6d455a8c8cee175824419ef5420802fe4b215d277dd2e6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
