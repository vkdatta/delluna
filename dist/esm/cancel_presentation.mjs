export const name="cancel_presentation";
export const id="dl_05f1eaeb4e1e48eeb291";
export const url=new URL("../icons/cancel_presentation.svg?v=a8dd77ee1149580b5e129abd5d456ddbebb63fc35c079b93ab9b18483f5700db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
