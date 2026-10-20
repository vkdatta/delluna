export const name="key-round";
export const id="dl_5deb514eedcd4abc86c6";
export const url=new URL("../icons/key-round.svg?v=6c3386d244c63e8d50d262ed2735ab9b2e0a2816a162c365c40015046e2fe552",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
