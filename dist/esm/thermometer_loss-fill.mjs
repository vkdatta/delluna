export const name="thermometer_loss-fill";
export const id="dl_a967639da7803356fc82";
export const url=new URL("../icons/thermometer_loss-fill.svg?v=4bfa8934cadee27d278d17786eea5ff45dc7f31506c09fc4fc765ff7ef5d5187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
