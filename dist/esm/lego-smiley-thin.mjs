export const name="lego-smiley-thin";
export const id="dl_1c369acaa7cb4349824c";
export const url=new URL("../icons/lego-smiley-thin.svg?v=ca6339bb363d2e6db0c9c72d24c50bdbd75889a9d23fb2791acc93fa83ae91bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
