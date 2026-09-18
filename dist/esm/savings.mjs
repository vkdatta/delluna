export const name="savings";
export const id="dl_b306382103ed426db946";
export const url=new URL("../icons/savings.svg?v=2cf5fb33342fe05885818055fa59310bb8f015059d20fa37c42747fd7ac5bad0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
