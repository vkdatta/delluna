export const name="first-aid-fill";
export const id="dl_079361ad91254541a48a";
export const url=new URL("../icons/first-aid-fill.svg?v=c7fe94b212a603baa2c55445b11cec26651300c2cd6f0275db7763d078ac1a40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
