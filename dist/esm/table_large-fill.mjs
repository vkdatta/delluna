export const name="table_large-fill";
export const id="dl_671a69e26f63b374d48d";
export const url=new URL("../icons/table_large-fill.svg?v=b042b6b208d633e868ffef541d6f0669559b1ca69a46383834fc1057ba49a9ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
