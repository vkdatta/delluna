export const name="lucid_2-file-terminal";
export const id="dl_26a79aae0e4148ebb08d";
export const url=new URL("../icons/lucid_2-file-terminal.svg?v=966daafd1a8186bbd0c3820fedadf021731be68efa693652714fdea1afa0d438",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
