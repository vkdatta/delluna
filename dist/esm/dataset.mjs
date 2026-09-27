export const name="dataset";
export const id="dl_a4a7d354e18d422b4482";
export const url=new URL("../icons/dataset.svg?v=b45273dfdf3f725d57fdab35a44611c856fab01c7e488e5e8f1e8b9096c306d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
