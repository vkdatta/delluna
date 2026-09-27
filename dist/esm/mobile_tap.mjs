export const name="mobile_tap";
export const id="dl_4d224fa068ec00c059a4";
export const url=new URL("../icons/mobile_tap.svg?v=8983c7a37a0859e253b6c8eaac523f895113cb222c8b4c9dff44c50f37a27116",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
