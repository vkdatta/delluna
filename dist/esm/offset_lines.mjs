export const name="offset_lines";
export const id="dl_ceda1c7b8dd24d2ab211";
export const url=new URL("../icons/offset_lines.svg?v=ab89c8184014dd674dcdac3c79424d2178ebbf24feb2a5cc1304940d59df556c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
