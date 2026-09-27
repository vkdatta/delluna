export const name="lucid_2-hard-drive-download";
export const id="dl_5b5806b08c2847968642";
export const url=new URL("../icons/lucid_2-hard-drive-download.svg?v=e2c3af9f2bec7804c1ec5c1da291e7069244a45f4cca2abd35e596a7c3bafe24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
