export const name="lucid_2-mail-badge";
export const id="dl_b2a8fff2a78f488ab733";
export const url=new URL("../icons/lucid_2-mail-badge.svg?v=662b1e8a7c169df758ac1e872b4ebbf7eb89ad39cc67200a7f338af205b78942",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
