export const name="add_column_left";
export const id="dl_4e670a97719874b1cff0";
export const url=new URL("../icons/add_column_left.svg?v=6721ff0d7a71a08d537afabe26e2c8a17365449c230ff34f6228da4063f8830c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
