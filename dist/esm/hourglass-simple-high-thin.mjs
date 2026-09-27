export const name="hourglass-simple-high-thin";
export const id="dl_235999113d4c4485a95c";
export const url=new URL("../icons/hourglass-simple-high-thin.svg?v=3f417185e82eb2ad4f03db2a773146c800c8fbd16114ca5f5f0654be06717f6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
