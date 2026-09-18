export const name="widget_menu";
export const id="dl_122b642912a84cae87ed";
export const url=new URL("../icons/widget_menu.svg?v=6f89d997f4c628659d643f533906843ad839e0e4a8252c11e5a46b0580351687",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
