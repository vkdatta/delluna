export const name="webhooks-logo";
export const id="dl_98e14ee313885d742875";
export const url=new URL("../icons/webhooks-logo.svg?v=33deb90ab886caaf940acd34d635f119cca721dbf07e45ef99b6b2170ecd0f8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
