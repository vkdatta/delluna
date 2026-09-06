export const name="hands-praying-light";
export const id="dl_c921d04478d146f88f07";
export const url=new URL("../icons/hands-praying-light.svg?v=4dfcca7b2300e1946ce6a817f64abf40f9344d39aeb0966ff1cfff8e04dc323b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
