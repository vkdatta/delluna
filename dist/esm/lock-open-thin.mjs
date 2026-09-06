export const name="lock-open-thin";
export const id="dl_5bd8653ce81541fe850b";
export const url=new URL("../icons/lock-open-thin.svg?v=dc9a1a3deb5f7e343aba9c724845321064c16c0dbeedb7948eefe825bab86598",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
