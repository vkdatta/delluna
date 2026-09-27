export const name="umbrella";
export const id="dl_267cc0ff6bca438eb6ef";
export const url=new URL("../icons/umbrella.svg?v=865ba11a11df46b38d2f166f5a8d855e912cb55f69562861635567794327fe1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
