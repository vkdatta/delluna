export const name="early_on";
export const id="dl_5de8e98505ca518adb35";
export const url=new URL("../icons/early_on.svg?v=da5f881178562670aa03b4da9d43f584e8b47634ce668145e3ed59440917452e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
