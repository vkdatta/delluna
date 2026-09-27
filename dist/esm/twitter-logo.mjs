export const name="twitter-logo";
export const id="dl_e8e8a81d12ad247e7d70";
export const url=new URL("../icons/twitter-logo.svg?v=92dd8e6933379fea2f2aa5ceb2763a3a73ce864b73c48bd28e11c5168958f1b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
