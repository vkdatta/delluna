export const name="water-fill";
export const id="dl_ca41aa7ae89669a8e06a";
export const url=new URL("../icons/water-fill.svg?v=947072fd8c73f20b5bc44984e3ac438facb4aee7864b075db00257ec2a1bc0dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
