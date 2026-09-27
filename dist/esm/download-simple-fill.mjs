export const name="download-simple-fill";
export const id="dl_3c33996f196c4540b78f";
export const url=new URL("../icons/download-simple-fill.svg?v=7231a52191037746b0fac73e2abeefc5e82ab791c341a9c41d16f348ec7ad46c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
