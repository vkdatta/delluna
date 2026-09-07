export const name="rocket-launch-fill";
export const id="dl_917bbe697de3450f8d43";
export const url=new URL("../icons/rocket-launch-fill.svg?v=fed02fcf57da975870e6898085b8e469a695dafac38ddae2d92b169678c661a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
