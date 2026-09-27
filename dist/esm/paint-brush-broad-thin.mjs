export const name="paint-brush-broad-thin";
export const id="dl_d7aade96d3e04675b181";
export const url=new URL("../icons/paint-brush-broad-thin.svg?v=6a1fc70b85cfd412789e395dd4734c7ba8fc44d0c4b9b614cbd63886efd51468",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
