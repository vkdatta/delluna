export const name="summarize";
export const id="dl_2a291478cda6b14a23fa";
export const url=new URL("../icons/summarize.svg?v=921b169eec1b42ff162f54c6690b30656d055c8af91847530e3808a26dbf94d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
