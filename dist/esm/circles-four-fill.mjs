export const name="circles-four-fill";
export const id="dl_cbf355535fb74a6eb0a6";
export const url=new URL("../icons/circles-four-fill.svg?v=a6d3cb73a41732a5aa7805b1c75ba6da0d5241315d6057e8312c47a3b6e24a0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
