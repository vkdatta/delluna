export const name="arrow-circle-right-fill";
export const id="dl_c6b98316657f4fc9ab42";
export const url=new URL("../icons/arrow-circle-right-fill.svg?v=7eaf96d3ca12837d4d46a18013d7ea22f283b15bd4b3cdcd7dedbb03c8519a64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
