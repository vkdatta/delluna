export const name="cell-signal-slash-bold";
export const id="dl_2f7ae865ad4b40d69724";
export const url=new URL("../icons/cell-signal-slash-bold.svg?v=bb695554dcba5523f0421bfb5e486c31a3a69808ea4e569b6d0204ec85f7e3e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
