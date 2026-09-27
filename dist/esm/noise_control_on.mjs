export const name="noise_control_on";
export const id="dl_71f9ef57180812e23ecd";
export const url=new URL("../icons/noise_control_on.svg?v=23c834b5a5cf7d38167a4cf3835ba07b476762bdd3332e62442b7e49765fe986",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
