export const name="sheets";
export const id="dl_aba16ec6b15e4b49b73f";
export const url=new URL("../icons/sheets.svg?v=b1cf8168e2166281b7f3e313344f5e6b42e5127a9a7fe0dc3fde06720d49d42f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
