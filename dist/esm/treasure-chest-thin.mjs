export const name="treasure-chest-thin";
export const id="dl_a5e331c3a5c7c1dcf6ee";
export const url=new URL("../icons/treasure-chest-thin.svg?v=e78e97605696d869fe0914eb55ca7fa49fcfd21c5e32754312d6c6cc7eb5ecec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
