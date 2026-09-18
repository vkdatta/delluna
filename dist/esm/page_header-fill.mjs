export const name="page_header-fill";
export const id="dl_43260c4b4c34486ebdaa";
export const url=new URL("../icons/P/page_header-fill.svg?v=e6e633dc660984acc79dc722bb67397e4f5f0fdb3c5e87fd395d661a46adff8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
