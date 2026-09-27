export const name="cube-bold";
export const id="dl_a429cca30bfc4ff2b6f6";
export const url=new URL("../icons/cube-bold.svg?v=e106be0ca7fa322e11eadb74e949dcbe046414dd45d48438ec19d6f0d9dd4e4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
