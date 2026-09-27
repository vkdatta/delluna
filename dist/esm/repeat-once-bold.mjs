export const name="repeat-once-bold";
export const id="dl_0bdb4063593d49fdba5d";
export const url=new URL("../icons/repeat-once-bold.svg?v=e240be0fb87a50b4dbc2495081ee720e3897df1513dcb4e1ec7c39cb9929c80c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
