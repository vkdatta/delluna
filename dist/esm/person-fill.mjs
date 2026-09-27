export const name="person-fill";
export const id="dl_277c92d10b0eaf95d10a";
export const url=new URL("../icons/person-fill.svg?v=7df699fecd40dc1e8fb8f39ff8741a98e763091a395b90d83d9eb0562239b00b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
