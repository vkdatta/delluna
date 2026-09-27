export const name="lucid_3-shield-plus";
export const id="dl_51205f51211b47caae4b";
export const url=new URL("../icons/lucid_3-shield-plus.svg?v=527d56cd89804896b1e161508ef4f02e051cfb501d569ce8b712106a703861fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
