export const name="open-ai-logo";
export const id="dl_142602b7adec40e390c7";
export const url=new URL("../icons/open-ai-logo.svg?v=0d5c342b0d9cb6bb0fd7f022804700da0c7cbe7a7e25e2e507b0ff2138805969",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
