export const name="check";
export const id="dl_5908cb5a33b24c738a18";
export const url=new URL("../icons/check.svg?v=cbb89a8c42f283d4f846eb935e05d88c1be04462f16480e068c0f82b9ce40b12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
