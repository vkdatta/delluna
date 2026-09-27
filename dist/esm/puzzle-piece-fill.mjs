export const name="puzzle-piece-fill";
export const id="dl_112c8fdc0a224f40bdd0";
export const url=new URL("../icons/puzzle-piece-fill.svg?v=0ac6364e859082e05f245acbff0a6bcb64e8bad657ef6108ee4a57b871fa02af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
