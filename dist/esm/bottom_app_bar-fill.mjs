export const name="bottom_app_bar-fill";
export const id="dl_121b5d15495876864684";
export const url=new URL("../icons/bottom_app_bar-fill.svg?v=884dd70f565cca1630c9a4c4bdc147d7029440ef85aaf6d858d48ad843aa92aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
