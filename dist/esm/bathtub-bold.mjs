export const name="bathtub-bold";
export const id="dl_af3827934e6f4f7cace0";
export const url=new URL("../icons/bathtub-bold.svg?v=6d16efa5ed76997fa2f7f335c008e2c6d4f814c21154f7f1203bfb833f93ce71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
