export const name="flow-arrow-thin";
export const id="dl_4ab2cb26ccaf4059b905";
export const url=new URL("../icons/flow-arrow-thin.svg?v=f614ebedca11d89cc5b3312a63196719171b05e08528ffe7693f74b695ade516",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
