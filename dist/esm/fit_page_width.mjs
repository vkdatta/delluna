export const name="fit_page_width";
export const id="dl_75ec9d8899272feb5488";
export const url=new URL("../icons/fit_page_width.svg?v=5e45170d7225960b86b0dba24a4e40309f854f521c8eb27185f70f1c2dc3d1e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
