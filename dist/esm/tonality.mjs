export const name="tonality";
export const id="dl_f785276ccef5a25b3c64";
export const url=new URL("../icons/tonality.svg?v=3badfbd2409f83c50996c516ce79b3704b833acaca359409b1a3a8b8f66ea633",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
