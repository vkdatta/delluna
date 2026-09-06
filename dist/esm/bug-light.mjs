export const name="bug-light";
export const id="dl_99e79f692dcb4860b5af";
export const url=new URL("../icons/bug-light.svg?v=8f8b7fd593a1e058ae7fa50693b7f1528119f19641a84f140a03342789dd4b5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
