export const name="on_device_training";
export const id="dl_3ffa35860113bcc98042";
export const url=new URL("../icons/on_device_training.svg?v=fb631ff13d142ba8557aa31d367b2cf3e85d23a0d035fa52c8116bc3cfc8774a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
