export const name="hands-praying-light";
export const id="dl_c921d04478d146f88f07";
export const url=new URL("../icons/hands-praying-light.svg?v=8005ba6cbad2f5c23988ddb0487e94243f019523b29d3c7cabbcf64fe8238760",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
