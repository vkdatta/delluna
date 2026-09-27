export const name="chalet-fill";
export const id="dl_0c61b7ac896d8e91d505";
export const url=new URL("../icons/chalet-fill.svg?v=41bc2e859a3fe63d1519e0c7768ab30aa232032790dabd41507cef678c577e19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
