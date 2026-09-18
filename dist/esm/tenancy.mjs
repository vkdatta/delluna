export const name="tenancy";
export const id="dl_5fee0ead142d401bbdf8";
export const url=new URL("../icons/T/tenancy.svg?v=77589ada4ae1a05822dd0d869db2ff869ce03e83e917b56d7de622c853cbf035",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
