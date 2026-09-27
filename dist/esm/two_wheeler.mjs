export const name="two_wheeler";
export const id="dl_76ed29ab694d5164331c";
export const url=new URL("../icons/two_wheeler.svg?v=24ef1f05a9aaf9e1322830cb8a92365aa10c2c4362d581549b75a0bed56e81e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
