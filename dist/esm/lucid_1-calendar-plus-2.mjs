export const name="lucid_1-calendar-plus-2";
export const id="dl_7d6375cb804f4b9bb76d";
export const url=new URL("../icons/lucid_1-calendar-plus-2.svg?v=1c11f53171e176a0618853646f3f35cbe5622daa67cf6eeb860d43c26e358703",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
