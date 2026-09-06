export const name="certificate-bold";
export const id="dl_2d658eea935c42f385ab";
export const url=new URL("../icons/certificate-bold.svg?v=73ee702ee707f7c2ad044f0dcf9cddef0d9066a85c8bdffff6111e5a5636b41e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
