export const name="custom_typography";
export const id="dl_8ed84273970145854e20";
export const url=new URL("../icons/custom_typography.svg?v=b50b1c493590c07050f9aea8434978b36418d5b9abcc58e22d5fb814096ed6a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
