export const name="stacked_line_chart";
export const id="dl_17f63f4721d04e4db81e";
export const url=new URL("../icons/stacked_line_chart.svg?v=fb7e184563f63b35b4218d8cf1cc0589e6c584f916df30e8d0cb9fb098be6ebe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
