export const name="build";
export const id="dl_4613ccf61d504348464c";
export const url=new URL("../icons/build.svg?v=3363d7abb02157fa332e218600f82f7a57dd432586918289c24bc9ddb8d0c9e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
