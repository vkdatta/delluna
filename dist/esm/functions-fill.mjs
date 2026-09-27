export const name="functions-fill";
export const id="dl_3944ab5fbf785ce214cb";
export const url=new URL("../icons/functions-fill.svg?v=3cfc45d9b684d6b0f1b9e8806e47a747f1c1d22ded61ded9ea185477de6c6c46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
