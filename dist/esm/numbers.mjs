export const name="numbers";
export const id="dl_4bec2dd277ca46a18ab2";
export const url=new URL("../icons/N/numbers.svg?v=159705cba0cbfb161d3fb53e4fe3ab1dc8700f990613ae10dbb35431f3775eeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
