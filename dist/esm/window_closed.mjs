export const name="window_closed";
export const id="dl_9688ae0bbc0759ade946";
export const url=new URL("../icons/window_closed.svg?v=d07bf3e6827249d7596a35b9b0985cbfb429a58e5c78f53e516d3ea78dd67389",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
