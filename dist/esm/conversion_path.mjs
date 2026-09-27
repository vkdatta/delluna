export const name="conversion_path";
export const id="dl_9613eb4b1f357c5dfde4";
export const url=new URL("../icons/conversion_path.svg?v=4389e9ff066d23eecbe988cc5b783e37e9b07a60b46a8ce81524a2d423e845a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
