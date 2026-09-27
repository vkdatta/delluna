export const name="table_large";
export const id="dl_4b9e55b96ac2b35daddc";
export const url=new URL("../icons/table_large.svg?v=c117366a0ebed98e6b3171e3f674df6597a21e54039cd901fa3ca689d758cfe8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
