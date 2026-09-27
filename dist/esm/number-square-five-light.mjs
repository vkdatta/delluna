export const name="number-square-five-light";
export const id="dl_217db7cc93e446dea8a0";
export const url=new URL("../icons/number-square-five-light.svg?v=009e24d8381e1297b3946070ffcd097f12b6db7f8bccc81a0f11d285d90af1a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
