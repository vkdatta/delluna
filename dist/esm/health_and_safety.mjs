export const name="health_and_safety";
export const id="dl_76cc5fe0f9786e0720b9";
export const url=new URL("../icons/health_and_safety.svg?v=203b77ca2ae811961854b10f150c6ea9c98b008ce878479943eea980c78fcf37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
