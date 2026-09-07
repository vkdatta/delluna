export const name="file-md-thin";
export const id="dl_c4b345346a2241f5b2c2";
export const url=new URL("../icons/file-md-thin.svg?v=21d485cea3c660f1065a395bb91a3e3fd30f07f55332c033cdfc2e6b6ca69fc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
