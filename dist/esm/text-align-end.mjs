export const name="text-align-end";
export const id="dl_5cb2c064350d46778fb6";
export const url=new URL("../icons/text-align-end.svg?v=5502c71232ae7cbd103599981db6a38949e7605cde08c88f4085ec94dd15ee25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
