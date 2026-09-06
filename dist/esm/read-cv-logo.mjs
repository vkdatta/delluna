export const name="read-cv-logo";
export const id="dl_a4a9f503d366421b9af1";
export const url=new URL("../icons/read-cv-logo.svg?v=639a7c45b91cf2b3fc1453e6eaaeed0a349273250ec83f09f152431d4a00d697",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
