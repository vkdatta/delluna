export const name="real_estate_agent";
export const id="dl_b48c653ebda09b6ddb8d";
export const url=new URL("../icons/real_estate_agent.svg?v=18f171b99f4f349a6278da70421ceee570c594035a746afd5031d4ff0cb4c202",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
