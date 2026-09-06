export const name="hand-waving-fill";
export const id="dl_9887c99d5124466a8ef5";
export const url=new URL("../icons/hand-waving-fill.svg?v=3f764af6fbb256ff4e97f96c38f3633a5ea46d6da436b1cfb8f0a1dd3c9634bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
