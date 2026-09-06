export const name="brackets-curly-light";
export const id="dl_57495f520bc04ad28632";
export const url=new URL("../icons/brackets-curly-light.svg?v=0b1773451fb8bc5ee29a3e40e8274856a2b677b9234d01d8472ecea6bccadc35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
