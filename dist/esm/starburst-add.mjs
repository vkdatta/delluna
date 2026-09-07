export const name="starburst-add";
export const id="dl_61f9742695e14c88be0c";
export const url=new URL("../icons/add/starburst-add.svg?v=15a8701f824209b39991ab99a9c4984ed761dc5198b2e8f8c85d873e933db28f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
