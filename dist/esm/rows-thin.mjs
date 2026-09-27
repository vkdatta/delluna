export const name="rows-thin";
export const id="dl_25694c8671214ea6b848";
export const url=new URL("../icons/rows-thin.svg?v=410f50fb97a678cb8a1b86b462da42447261b3de6e57ca260e212750ce7fe93a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
