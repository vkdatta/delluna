export const name="lucid_1-clipboard-plus";
export const id="dl_499c8a6441344eddb6bd";
export const url=new URL("../icons/lucid_1-clipboard-plus.svg?v=5e61f1c53bdce700690eb05d072409b6c81c0bb4820c680b31e29739044c868f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
