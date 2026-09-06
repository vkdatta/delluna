export const name="backspace-duotone";
export const id="dl_7e969d8edd3642609be6";
export const url=new URL("../icons/backspace-duotone.svg?v=b4ba966a140914736563cb40ebe4ca3e63fab3cbaa19fb15d4aba2410f5fe47b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
