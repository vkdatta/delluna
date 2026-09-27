export const name="hand-waving-fill";
export const id="dl_9887c99d5124466a8ef5";
export const url=new URL("../icons/hand-waving-fill.svg?v=c61fad06cc61450bb4c089ce03f08273f6bc95786f08213c6f8e37af388dff2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
