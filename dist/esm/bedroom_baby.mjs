export const name="bedroom_baby";
export const id="dl_fb60c5e82ec58d6e1717";
export const url=new URL("../icons/bedroom_baby.svg?v=af89ef86108ae992b67fc5f08a1b791dee0074e762a606330c0effd6bd54a842",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
