export const name="soap-fill";
export const id="dl_867447684664d14ae314";
export const url=new URL("../icons/soap-fill.svg?v=c11f0685b43750f9629f153b49126325e27c49257a2e6543c21f7c623d0bc742",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
