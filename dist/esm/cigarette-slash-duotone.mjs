export const name="cigarette-slash-duotone";
export const id="dl_f552bbece34446e3ade8";
export const url=new URL("../icons/cigarette-slash-duotone.svg?v=a8f0905f154347acea0df5945601384bd907a48ed560c8bff07e05f1f7f3ca99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
