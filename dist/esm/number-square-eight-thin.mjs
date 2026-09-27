export const name="number-square-eight-thin";
export const id="dl_55d552a1950142f79ead";
export const url=new URL("../icons/number-square-eight-thin.svg?v=49208ab5e1e6db5629c0b93b8ea2e66be24229b96e3390b4b67e6a23e3e63103",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
