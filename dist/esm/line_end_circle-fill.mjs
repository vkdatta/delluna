export const name="line_end_circle-fill";
export const id="dl_5ada40fd22fd79160db9";
export const url=new URL("../icons/line_end_circle-fill.svg?v=1111bf9184cf662f35836ce2670d395cff918aaaf249a6beb0eb15f0bf61afaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
