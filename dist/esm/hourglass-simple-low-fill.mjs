export const name="hourglass-simple-low-fill";
export const id="dl_26aaad2add7747aca183";
export const url=new URL("../icons/hourglass-simple-low-fill.svg?v=5ce8e9b38613254bde3a10d653b8fa06dfefc2860e5879c638db76c80411ff10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
