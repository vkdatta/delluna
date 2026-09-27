export const name="court-basketball-duotone";
export const id="dl_2433a3742eea45c79d16";
export const url=new URL("../icons/court-basketball-duotone.svg?v=f509042c14e69a9f75b6b772bf2c83471f4e8cce2adaed4709a43af3c0a1b8c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
