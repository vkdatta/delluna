export const name="check-fat-bold";
export const id="dl_8eca35581a1d4c44a277";
export const url=new URL("../icons/check-fat-bold.svg?v=bb07b4fa477ba8676e86d7a3593b156818ad095c73e4da961a1252dc8f6027bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
