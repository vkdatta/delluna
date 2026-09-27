export const name="align-bottom-bold";
export const id="dl_68a54ae0f288424096e4";
export const url=new URL("../icons/align-bottom-bold.svg?v=95a9e02f811423bed1039232e9e5380b96da3f1bde8d9e6f0a3c64c42b717f3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
