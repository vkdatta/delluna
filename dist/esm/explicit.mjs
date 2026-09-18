export const name="explicit";
export const id="dl_bd73fef9e0554123bd89";
export const url=new URL("../icons/explicit.svg?v=6f22839f0d54ee9b1c3e8f8ae60cff683db6811f59fdc5efb0becb0db53b79bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
