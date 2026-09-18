export const name="view_sidebar";
export const id="dl_7bc9c2c8ccdc46099726";
export const url=new URL("../icons/V/view_sidebar.svg?v=775491a595a901fa82a226f8d3477b357fcd49ae6e2096991b4cf6a3ef1f6b25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
