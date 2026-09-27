export const name="brackets-curly-fill";
export const id="dl_1b56e0834cb445ca828f";
export const url=new URL("../icons/brackets-curly-fill.svg?v=81f5b7b1b3417962563e92488a2389c0942294e2dc1dd8849790d8e7cfb21cec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
