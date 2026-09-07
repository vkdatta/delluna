export const name="basketball-thin";
export const id="dl_215e1ce797844c519700";
export const url=new URL("../icons/basketball-thin.svg?v=a742365d22e3cf48b0d8601293239860da33020a3990d9f1b1c9e9c90e40c55a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
