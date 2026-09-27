export const name="arrow-down-right-thin";
export const id="dl_c846302b613e4251aaae";
export const url=new URL("../icons/arrow-down-right-thin.svg?v=5c8ba96b1bf10300f4b931fdd45f651efd634469e581d0965c6964a82401f73b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
