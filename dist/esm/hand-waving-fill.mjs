export const name="hand-waving-fill";
export const id="dl_9887c99d5124466a8ef5";
export const url=new URL("../icons/hand-waving-fill.svg?v=324100211ff8cf85e534b636d90aa5f7f12dfcf4497144a8708afab11bdb3a47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
