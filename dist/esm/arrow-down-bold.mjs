export const name="arrow-down-bold";
export const id="dl_03f962b11ba9412f9392";
export const url=new URL("../icons/arrow-down-bold.svg?v=131db5288ba784cde5c403bb3996e4af4241f567d4752ce4ef9e4ea2989b0107",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
