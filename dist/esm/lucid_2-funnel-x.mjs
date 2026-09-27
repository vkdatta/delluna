export const name="lucid_2-funnel-x";
export const id="dl_48b921a05ee94400b5d2";
export const url=new URL("../icons/lucid_2-funnel-x.svg?v=b890a2b85c9ebdcce3ac8cae4ffdc3619b8dd7ee3cb5e53c87f8ccc8fb823fff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
