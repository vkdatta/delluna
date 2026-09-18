export const name="pen_size_4-fill";
export const id="dl_5a495ccea64f47f0a1ff";
export const url=new URL("../icons/P/pen_size_4-fill.svg?v=bf21c670992aa80ee4b8959ded415f9049005423372fb48c185654913ac1d663",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
