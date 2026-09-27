export const name="microphone-thin";
export const id="dl_6046c539b048428dbbd5";
export const url=new URL("../icons/microphone-thin.svg?v=272ccff3221157bba3bbee95a1737c0c07a3dc260246e1fb2b958fbf5e0b3183",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
