export const name="text-h-four-light";
export const id="dl_ba4ee59cdec84421bc65";
export const url=new URL("../icons/T/text-h-four-light.svg?v=57e96df87b6c7745816b9a57f690a324fa11ce72539b7d2b9cf3faeec7109350",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
