export const name="game-controller-bold";
export const id="dl_4f46da98846a48a58725";
export const url=new URL("../icons/game-controller-bold.svg?v=9e77dbf27504ff0a76147fc7d7afd0cd0cfb85c19e26c3359d344cc9ea0c61d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
