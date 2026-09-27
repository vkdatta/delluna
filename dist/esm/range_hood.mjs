export const name="range_hood";
export const id="dl_3d997e156639c2572a42";
export const url=new URL("../icons/range_hood.svg?v=a9a32ab0bee15860bc3ab1be39cdd8e94b9de1d1d02ace3dd7075409ab087387",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
