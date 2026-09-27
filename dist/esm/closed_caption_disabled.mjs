export const name="closed_caption_disabled";
export const id="dl_bb329f6f1fd53b06ad78";
export const url=new URL("../icons/closed_caption_disabled.svg?v=f9d700f33edff854e94553e4d510b647cbd1b816f288d433b0fd4eb99f94d34a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
