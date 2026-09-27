export const name="stadium";
export const id="dl_ffdc3fbdd385c7fc7ce7";
export const url=new URL("../icons/stadium.svg?v=4db4a7ee27ee8325707a8fbd741dfa72939ad9ddc909d7a8fc217b8bc3ae9ec2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
