export const name="smiley-x-eyes-duotone";
export const id="dl_481230f860be83f9eb00";
export const url=new URL("../icons/smiley-x-eyes-duotone.svg?v=678b840d28d5776837a763e390df6f3b529e58dd4e82e687d37214e5767d2be5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
