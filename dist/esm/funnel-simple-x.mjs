export const name="funnel-simple-x";
export const id="dl_2c7fb9d69f1b48569704";
export const url=new URL("../icons/funnel-simple-x.svg?v=290d62678dc1098cd06cb7f997bb12e57c48fe73468b5048ee41f84953a39102",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
