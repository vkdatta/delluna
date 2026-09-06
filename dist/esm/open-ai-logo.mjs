export const name="open-ai-logo";
export const id="dl_142602b7adec40e390c7";
export const url=new URL("../icons/open-ai-logo.svg?v=d26575fc063bafec9f0fed60c5de66107db81df25a79a97d75d6f81dd85c090a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
