export const name="center_focus_weak";
export const id="dl_78023f471f3a06d60ffd";
export const url=new URL("../icons/center_focus_weak.svg?v=fa45496cc20982a3680e2f8d1f7d80237f71f446fc9c36e8e174101d2b6b882d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
