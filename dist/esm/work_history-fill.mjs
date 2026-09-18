export const name="work_history-fill";
export const id="dl_27830ba766f04c718aae";
export const url=new URL("../icons/W/work_history-fill.svg?v=8e5f32811bcaeac5d81c07143fec7f9db85f35d0aeee3e1844d058920da0dd32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
