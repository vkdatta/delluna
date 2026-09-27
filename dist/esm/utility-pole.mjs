export const name="utility-pole";
export const id="dl_2a6e44436806429f9518";
export const url=new URL("../icons/utility-pole.svg?v=fad32a03e6fd8c4e8be5efb3e851d9c156bc35278a3f625de4778ac07875e40f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
