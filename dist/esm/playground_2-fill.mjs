export const name="playground_2-fill";
export const id="dl_10fce32f7ceb40739822";
export const url=new URL("../icons/P/playground_2-fill.svg?v=c9800a941d87f2d79a4a65453f9ce3113cf37f4966f57a7ea83a86bba4703ddd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
