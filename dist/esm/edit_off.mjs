export const name="edit_off";
export const id="dl_74635b06ae1941db820b";
export const url=new URL("../icons/edit_off.svg?v=50a9866149124106d246852801c0dad4ca256d9d364ac931f323e0f9724e622a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
