export const name="rabbit-thin";
export const id="dl_7791ba92d72c48c4ada2";
export const url=new URL("../icons/rabbit-thin.svg?v=055b103116ddfaf572ddf1df35697bb72f01e9dbfe23a99ed810553764813685",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
