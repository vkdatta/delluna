export const name="resume";
export const id="dl_7476686db554b4373f8d";
export const url=new URL("../icons/resume.svg?v=b026259222f66a8a9be4ee1111b3e8ef440cdd8e53cf08ffe91912ff344ae9e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
