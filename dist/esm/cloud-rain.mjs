export const name="cloud-rain";
export const id="dl_033a16b03c544356b821";
export const url=new URL("../icons/cloud-rain.svg?v=27b8236ba3188194a5fe4f493883dd4ef2b495bc4f64091919c227764ccd3e02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
