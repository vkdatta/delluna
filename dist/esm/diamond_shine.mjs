export const name="diamond_shine";
export const id="dl_2cb6837620018e47f014";
export const url=new URL("../icons/diamond_shine.svg?v=1bc8b578a2d88d6b9f0ff53fe816919a2b853eb388896febc0eba5b5c950f06d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
