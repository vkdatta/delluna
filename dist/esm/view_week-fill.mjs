export const name="view_week-fill";
export const id="dl_794a1916a4134bc7c276";
export const url=new URL("../icons/view_week-fill.svg?v=3138c7b9ec9a09b196be56be8cce4d1a38baa778057ba1175ad6156c18914359",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
