export const name="24mp";
export const id="dl_dad1bd4c35a9e8b3058c";
export const url=new URL("../icons/24mp.svg?v=9b679923c3dbc759cba133b4def49b7f6116f801c81b050db5625d5c89a3911b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
