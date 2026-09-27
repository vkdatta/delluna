export const name="terminal-duotone";
export const id="dl_e1b9b133896fbdd15453";
export const url=new URL("../icons/terminal-duotone.svg?v=bd57297dc1c56dcc7031ce8aff13de715b7f857ca5f312a9e08758d804474b08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
