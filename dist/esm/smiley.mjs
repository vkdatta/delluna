export const name="smiley";
export const id="dl_310407dddb4b808bb45d";
export const url=new URL("../icons/smiley.svg?v=fe84090e1ac938e36d2f6dddb0651aefb96f6064976acf2db25b2dcb139abb08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
