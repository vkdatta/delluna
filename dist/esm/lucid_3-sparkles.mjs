export const name="lucid_3-sparkles";
export const id="dl_abc618183c8f4215b097";
export const url=new URL("../icons/lucid_3-sparkles.svg?v=d59043ef1c0674d5e4fd3bd8bf735eb485763780cfc7ee9e5859763a5336d812",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
