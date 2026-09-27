export const name="heart-break-thin";
export const id="dl_607f14b6cc4a4e5ea339";
export const url=new URL("../icons/heart-break-thin.svg?v=e08a11b0a7ab64b44d377525e0112fdf980cdcac428bef647a181972c5ae88bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
