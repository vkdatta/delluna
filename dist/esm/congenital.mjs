export const name="congenital";
export const id="dl_3c7bc7878e7e4dfc8ea4";
export const url=new URL("../icons/congenital.svg?v=6ebe042cfcad756336849957a0bf81d2c165b6925de503a387d89e7503986db1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
