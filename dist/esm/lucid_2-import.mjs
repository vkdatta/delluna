export const name="lucid_2-import";
export const id="dl_5053583fcb1d4d959387";
export const url=new URL("../icons/lucid_2-import.svg?v=d7147670b5051add44b1b215445ead4862ed2d854e783476c61491de31831266",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
