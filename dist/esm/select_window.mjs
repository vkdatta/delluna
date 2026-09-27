export const name="select_window";
export const id="dl_324327a07df5a5407f77";
export const url=new URL("../icons/select_window.svg?v=8d29708ec24553b95a27290026d6a32b19341c43ac85fe33fd45a7c006c9b8a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
