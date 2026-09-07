export const name="thermometer-light";
export const id="dl_4e982fe9b9cf42c08449";
export const url=new URL("../icons/T/thermometer-light.svg?v=a5a2465d4bf6c469116479614695b87dcd6cbd766603403643499a3cf30ebe88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
