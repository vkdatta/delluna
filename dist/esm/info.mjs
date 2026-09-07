export const name="info";
export const id="dl_308523e5cf143553e4fb";
export const url=new URL("../icons/info.svg?v=438a1f319d53d86e840af73fb7b1d224c9224a437b9fa449a4e2cb45a82a3552",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
