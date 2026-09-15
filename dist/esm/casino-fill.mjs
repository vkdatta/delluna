export const name="casino-fill";
export const id="dl_082fcd8e50694eac8ac9";
export const url=new URL("../icons/C/casino-fill.svg?v=ba7300d08cc2c25bbb7c4284fbba2431754d06e926a8922f72d1d672374f94db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
