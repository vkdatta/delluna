export const name="b_circle";
export const id="dl_e7cda566f5c20da4e82d";
export const url=new URL("../icons/b_circle.svg?v=8e1defe74f8109ba6f8fa749f2e4cade6d9a87d4464e58bace19793a50dd3729",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
