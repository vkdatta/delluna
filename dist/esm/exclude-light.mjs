export const name="exclude-light";
export const id="dl_5270f740305146c4b3fb";
export const url=new URL("../icons/exclude-light.svg?v=4a3a4de72d8bc5691b153db6e75f4913988a82493d251e64ce3a7142f423e8dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
