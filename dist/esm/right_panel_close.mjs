export const name="right_panel_close";
export const id="dl_47c7e34d041ff4cb1bd5";
export const url=new URL("../icons/right_panel_close.svg?v=38ebfb2ac0cf2c9de1a06179cb0c694d9cb8f51db56ed3db65aab0bb446a89ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
