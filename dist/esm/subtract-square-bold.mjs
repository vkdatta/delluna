export const name="subtract-square-bold";
export const id="dl_440f70080d764dbd8dad";
export const url=new URL("../icons/subtract-square-bold.svg?v=b0250e879ba4b7aa059c0530180ebf294bb30ba8dcdaef6b6ccc1d3f825c0d31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
