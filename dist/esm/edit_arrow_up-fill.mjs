export const name="edit_arrow_up-fill";
export const id="dl_e98cf6016747b9b99724";
export const url=new URL("../icons/edit_arrow_up-fill.svg?v=40d1ee6408422abf529c2b62ec89a15ef4f35a0bc7e9932dd80b7caef28283e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
