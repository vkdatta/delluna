export const name="nest_audio";
export const id="dl_172f5d4aca5641aa8929";
export const url=new URL("../icons/N/nest_audio.svg?v=a530d81b2529dcb2d56d69d5060c9b61526d8ff315a057fa3b1615e608b70f62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
