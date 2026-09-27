export const name="looks-fill";
export const id="dl_6e384b006c723e063cf1";
export const url=new URL("../icons/looks-fill.svg?v=5698678570718a9819b94196742ba85b69e04ec9b9f44c7bef5a50ec340a0d19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
