export const name="brightness_7";
export const id="dl_53ae7a8d5f6049d76b76";
export const url=new URL("../icons/brightness_7.svg?v=e09a8771466b5432aa0c4a46b879f410578032c86d486e59342918796ec8a9e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
