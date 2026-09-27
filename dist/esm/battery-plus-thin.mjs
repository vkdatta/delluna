export const name="battery-plus-thin";
export const id="dl_9223cd2566bb49a49433";
export const url=new URL("../icons/battery-plus-thin.svg?v=ce034b126d058d352a755422fc294b00dfc5a85c8a395ffb6752be05f50f3af3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
