export const name="chrome_reader_mode";
export const id="dl_7e464affbbc2bd07dd00";
export const url=new URL("../icons/chrome_reader_mode.svg?v=c89353775b2838d8ffedda0008f6d769c6736c34299166944b3caeb5816e7c3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
