export const name="lucid_1-carrot";
export const id="dl_0fea61e868384822bd1f";
export const url=new URL("../icons/lucid_1-carrot.svg?v=35c719f0b4b633bd5a22cf44f6fb0176fc80d5241701a62abd8f592c6d59a00c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
