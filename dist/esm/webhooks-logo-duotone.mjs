export const name="webhooks-logo-duotone";
export const id="dl_7dd90e951c4b4544b65a";
export const url=new URL("../icons/W/webhooks-logo-duotone.svg?v=16363f5d37793fdcec54e7d3f37ba5a793f365deff772b3b4bfc4b4de54bfdfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
