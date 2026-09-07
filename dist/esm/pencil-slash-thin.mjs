export const name="pencil-slash-thin";
export const id="dl_401ac3f7fffa40b69b27";
export const url=new URL("../icons/pencil-slash-thin.svg?v=1279d3a4cb53503d06768262d7568ff516f9c39ade54e3b36338fc07558c2733",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
