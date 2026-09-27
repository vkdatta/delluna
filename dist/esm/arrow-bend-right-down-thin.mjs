export const name="arrow-bend-right-down-thin";
export const id="dl_0c42e27aafdd45c296d3";
export const url=new URL("../icons/arrow-bend-right-down-thin.svg?v=5446e872f2e644abd397f3a7ac18d118fe6a725c1a46d6ac3e20e1c0ac2ca689",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
