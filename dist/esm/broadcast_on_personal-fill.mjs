export const name="broadcast_on_personal-fill";
export const id="dl_02bb9f65e9dfc0e2aa42";
export const url=new URL("../icons/broadcast_on_personal-fill.svg?v=5d99eee2dd774fc87873432cbfb412c6e19282f27dae0fda89f7255cfd202648",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
