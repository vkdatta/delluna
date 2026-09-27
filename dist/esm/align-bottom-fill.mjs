export const name="align-bottom-fill";
export const id="dl_fbd75476682f4dd18d30";
export const url=new URL("../icons/align-bottom-fill.svg?v=902e6a98172b8dae581be22e00b8518b511ee51595d0515b4cde6afe4f6bf589",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
