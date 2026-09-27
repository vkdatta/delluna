export const name="beach-ball-thin";
export const id="dl_e475d3a7f0f34cf2873d";
export const url=new URL("../icons/beach-ball-thin.svg?v=c8d68ab82dacb3fb013b2e34d74b0f46bc66e557b104509f6e48bb3328569e9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
