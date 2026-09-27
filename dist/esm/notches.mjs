export const name="notches";
export const id="dl_07d445fe52a348aeb630";
export const url=new URL("../icons/notches.svg?v=4ad09247076ece444604a16aacd946ccce4edc4aa6cabb6414f76ddb4cc7b04d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
