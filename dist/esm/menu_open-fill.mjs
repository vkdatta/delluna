export const name="menu_open-fill";
export const id="dl_7830cdd1b29db4befd63";
export const url=new URL("../icons/menu_open-fill.svg?v=c07629e2788a069ceb3101d87af70c8f67c8d5b823c90b17138fb7d1f6b9bb46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
