export const name="cards-light";
export const id="dl_0189d7aea1184414ae85";
export const url=new URL("../icons/cards-light.svg?v=db35c9f910bd296957b08f4d88c81f37e1885fb6a1d5d9a9c5539badf26e7feb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
