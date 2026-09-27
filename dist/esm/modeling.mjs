export const name="modeling";
export const id="dl_ab3a2e865c6467f29d91";
export const url=new URL("../icons/modeling.svg?v=0967ea4b15b95807a12aa5bcc991eab7ab6425af046ebbacb0ac01ee3f48587f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
