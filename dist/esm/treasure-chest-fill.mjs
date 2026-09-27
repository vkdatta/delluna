export const name="treasure-chest-fill";
export const id="dl_e9d599fa6d3213a66730";
export const url=new URL("../icons/treasure-chest-fill.svg?v=60a416370ef9286cf252dcecd6f35979db29273898d6586635c80edac6fc9158",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
