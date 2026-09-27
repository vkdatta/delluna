export const name="fork-knife";
export const id="dl_529bcc0d07104fbfbb86";
export const url=new URL("../icons/fork-knife.svg?v=273f12d3ddb436913ad61711d4356f074eb5cc7bf53f213cdda537271027c714",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
