export const name="undo-2";
export const id="dl_c4b452afad9842ebb125";
export const url=new URL("../icons/undo-2.svg?v=26444c6b55e9e4a246d4cb2c39ae095297ebc848a67374bffb3db3aa7aa4cf03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
