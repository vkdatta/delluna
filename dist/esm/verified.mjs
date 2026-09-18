export const name="verified";
export const id="dl_546bbd867d7e47b2b66b";
export const url=new URL("../icons/V/verified.svg?v=eb316e9f802d5b37299ce2fb1ab2df5f13c9490269ae73f65b6bf52aa8d12ba4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
