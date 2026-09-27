export const name="desktop_access_disabled-fill";
export const id="dl_c538d6d5ca9bf92685fa";
export const url=new URL("../icons/desktop_access_disabled-fill.svg?v=ace9dee5d6b7fd64c4b5783f513f51ce5f5e6d7bfdcc5a617d279837f4d8ee04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
