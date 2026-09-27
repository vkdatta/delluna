export const name="chart_data";
export const id="dl_2bfc86377c2967e65c10";
export const url=new URL("../icons/chart_data.svg?v=b7fca0789d7355c38393b0cfb56c0c15c1b6ff98446162f5863b3844950749df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
