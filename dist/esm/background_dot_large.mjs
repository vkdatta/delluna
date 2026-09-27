export const name="background_dot_large";
export const id="dl_f370eb2935359553f593";
export const url=new URL("../icons/background_dot_large.svg?v=7eaf3817ff66d99aa5f8d742da1c4bbcc99734dddcb623df6d2386472f6946ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
