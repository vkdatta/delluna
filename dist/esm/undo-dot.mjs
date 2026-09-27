export const name="undo-dot";
export const id="dl_8a9ed63fee534c6da385";
export const url=new URL("../icons/undo-dot.svg?v=380c1db8890c10c521668064e809e3ba5bc8c8b0a88be31b540376ef31b9d810",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
