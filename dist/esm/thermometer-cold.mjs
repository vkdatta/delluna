export const name="thermometer-cold";
export const id="dl_0ae4ef5e7081de179428";
export const url=new URL("../icons/thermometer-cold.svg?v=47dbfacae582805444acc3d7c730721f0c0438059d26f562f2adc12c51775b09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
