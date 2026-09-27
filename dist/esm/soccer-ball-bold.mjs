export const name="soccer-ball-bold";
export const id="dl_0dc3bbcff4937025ab1c";
export const url=new URL("../icons/soccer-ball-bold.svg?v=6f1c9dc476e6075ecd006cef58a030d93613db25b559ecc28b06249a015a856e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
