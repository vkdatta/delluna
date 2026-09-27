export const name="nature-fill";
export const id="dl_778e34c575f4c9eaa7aa";
export const url=new URL("../icons/nature-fill.svg?v=3f065af3cfc2af800acf2266425d3724ccad7c6d73f8ac6a08ed4c21614308f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
