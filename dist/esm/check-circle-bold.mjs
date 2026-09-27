export const name="check-circle-bold";
export const id="dl_ab8ba0cecfb2406e9177";
export const url=new URL("../icons/check-circle-bold.svg?v=c94f41ad675403c22369dcaaf2a865c0a32118f579adbf61aaa2fdf884fb540b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
