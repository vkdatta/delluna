export const name="cell-signal-high-duotone";
export const id="dl_354f573778784cad96f8";
export const url=new URL("../icons/cell-signal-high-duotone.svg?v=7beb09690ead8c629ed9f94666bac9d54ed94456d20ecf2beb43a49e9670bb9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
