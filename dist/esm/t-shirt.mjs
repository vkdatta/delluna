export const name="t-shirt";
export const id="dl_b81505059fc35946de90";
export const url=new URL("../icons/t-shirt.svg?v=b047d8ff43578dd0090aa71becca08d52ace5cb96bfe3fd0bc34429b413fe52a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
