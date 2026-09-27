export const name="cell-signal-slash-bold";
export const id="dl_2f7ae865ad4b40d69724";
export const url=new URL("../icons/cell-signal-slash-bold.svg?v=aa02c85f5706caa11d65996e5935422e6bdce4ccdc3370f446d6244c92471dd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
