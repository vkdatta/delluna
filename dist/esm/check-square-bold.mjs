export const name="check-square-bold";
export const id="dl_fa70426aee6548a2af3b";
export const url=new URL("../icons/check-square-bold.svg?v=bf7076e1fe2e4a9164f8537b40b1abb9ed288d47da7ce3898bcbdd694423e7ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
