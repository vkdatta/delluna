export const name="not-member-of";
export const id="dl_63cf7aba3f014523bad3";
export const url=new URL("../icons/not-member-of.svg?v=d9496f52f05af9ceafb24907f209a4b339176a1d286c36f0d90817e77773370d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
