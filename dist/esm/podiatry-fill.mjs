export const name="podiatry-fill";
export const id="dl_421e9472211c66187873";
export const url=new URL("../icons/podiatry-fill.svg?v=acb04decd13c81a51e4411c81c61ffc66710a3ccef2b72c08b0e8137c09d0ef1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
