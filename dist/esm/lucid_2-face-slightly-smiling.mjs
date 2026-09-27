export const name="lucid_2-face-slightly-smiling";
export const id="dl_a374ab28a6aa40ebbcc7";
export const url=new URL("../icons/lucid_2-face-slightly-smiling.svg?v=d2f1da7ee66dcc898c124005932621a69813d84ead409d304af4c63097294bbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
