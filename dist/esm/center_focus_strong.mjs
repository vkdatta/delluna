export const name="center_focus_strong";
export const id="dl_ca8cda81e42e40711476";
export const url=new URL("../icons/center_focus_strong.svg?v=5e8669c405a0d7b79b1b6197569d39ab403f6586fa898d8cc6b1bf9634e87d4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
