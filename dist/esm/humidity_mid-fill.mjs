export const name="humidity_mid-fill";
export const id="dl_56f548e767b2e79bc5f6";
export const url=new URL("../icons/humidity_mid-fill.svg?v=3510420d8ebe10a561b4d9127cc641517a322b9d3c0a366c79d710ceb46b2b58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
