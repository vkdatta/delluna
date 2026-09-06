export const name="desktop-tower-bold";
export const id="dl_6aaa6638475944088af5";
export const url=new URL("../icons/desktop-tower-bold.svg?v=b69c51137f0457ac96712c1d83a9da66eabc123543b0318ad2da8a471bbffbc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
