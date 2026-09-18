export const name="mood_bad";
export const id="dl_813601b4e4e84555a7be";
export const url=new URL("../icons/M/mood_bad.svg?v=e5cc25abc21095db0ff462b91caba28a2aa8b8becf6774832c5a8a3a57d00bd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
