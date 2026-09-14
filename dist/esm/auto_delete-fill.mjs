export const name="auto_delete-fill";
export const id="dl_9d5b05cf548d4b12bcd2";
export const url=new URL("../icons/A/auto_delete-fill.svg?v=d5504370f45317eae330c24faca63d053ef915d574692f4adfef76602cdfcdd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
