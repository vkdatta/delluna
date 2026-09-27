export const name="lucid_1-banknote-arrow-down";
export const id="dl_fa7f233783934a48863e";
export const url=new URL("../icons/lucid_1-banknote-arrow-down.svg?v=20207b1691cd2bed915da412fc961b03837eae363eac2975ac9822c078cb99b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
