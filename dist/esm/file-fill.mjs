export const name="file-fill";
export const id="dl_8deec1ad0630484fa9ed";
export const url=new URL("../icons/file-fill.svg?v=0bff18f7064148bc9b411b530801106f88e29ae01d2dd03eef968b839eb9ab9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
