export const name="puzzle-piece-light";
export const id="dl_8714e76b593f468581d3";
export const url=new URL("../icons/puzzle-piece-light.svg?v=06fc78f4bbc1a49effc63bfb361cf73235bae0b02f160e31fdafe01c3b472781",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
