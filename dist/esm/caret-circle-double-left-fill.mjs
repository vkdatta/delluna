export const name="caret-circle-double-left-fill";
export const id="dl_48ea04303b354928a340";
export const url=new URL("../icons/caret-circle-double-left-fill.svg?v=656451ffa5358a55893c8b05f75e5a1094f95abf648219460eb0519a3dc0f209",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
