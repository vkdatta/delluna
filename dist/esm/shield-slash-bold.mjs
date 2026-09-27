export const name="shield-slash-bold";
export const id="dl_7b5439aca3ecb51f2543";
export const url=new URL("../icons/shield-slash-bold.svg?v=268c04c6f7d406b5f19a95fcda9b28cbdba272266eb094c4f7e49c9ce4bbe263",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
