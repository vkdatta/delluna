export const name="lucid_1-clock-2";
export const id="dl_cc4ad29881cc40d89132";
export const url=new URL("../icons/lucid_1-clock-2.svg?v=dd18bd3b9b5a9376a60f4b004a0059c2fc870a617eea23736740fc2eeccee36a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
