export const name="lucid_1-chevrons-left-right-ellipsis";
export const id="dl_66dfad4ff0724e80a58e";
export const url=new URL("../icons/lucid_1-chevrons-left-right-ellipsis.svg?v=1f669fa1319877e3edd467afe1b4452f63c45c2e92bb92b4074fd187bdace8aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
