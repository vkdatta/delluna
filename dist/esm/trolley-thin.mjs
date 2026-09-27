export const name="trolley-thin";
export const id="dl_209f1166b216a0f51a71";
export const url=new URL("../icons/trolley-thin.svg?v=01e6f9c34f8655eb3ba923f57ad09c396e3d6132a4d57bc9fba3885875ad291e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
