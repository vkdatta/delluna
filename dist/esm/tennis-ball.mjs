export const name="tennis-ball";
export const id="dl_706dbda79412fc9f3dae";
export const url=new URL("../icons/tennis-ball.svg?v=7e4ea21db59790c3829495a51d30df9c95f793df4b761fa01a4daca369cd4ec0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
