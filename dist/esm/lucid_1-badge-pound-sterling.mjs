export const name="lucid_1-badge-pound-sterling";
export const id="dl_5d9e5fa09f5f4306bb28";
export const url=new URL("../icons/lucid_1-badge-pound-sterling.svg?v=fbde266d7df69b1533d4f66516d6dd762a03c7d07cb77f93680ab28919a591d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
