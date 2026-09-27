export const name="tab_group";
export const id="dl_9ce543c45b884109ebd9";
export const url=new URL("../icons/tab_group.svg?v=3faf60c644b2a5ffb8b7cf9560c5a8398378bf7e089729db63dd59ba3f04a371",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
