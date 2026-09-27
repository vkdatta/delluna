export const name="lucid_1-archive";
export const id="dl_cc17b59a554a4470abe9";
export const url=new URL("../icons/lucid_1-archive.svg?v=6cf1f7734e25a1e3b1cabcabe1c84d625847355489ad74adebe80aeaac8a5a99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
