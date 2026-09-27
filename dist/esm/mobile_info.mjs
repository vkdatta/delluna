export const name="mobile_info";
export const id="dl_72175135fe0e2a3e22e3";
export const url=new URL("../icons/mobile_info.svg?v=2e561e74f729c6200a1b5a46d4178bd8a96567ce4dec69b5848d8e78b746c13c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
