export const name="insert_chart-fill";
export const id="dl_c7f2c4724773b9db5f9a";
export const url=new URL("../icons/insert_chart-fill.svg?v=e872601a65dff2127142e105bd1fddc2f21d09d788cd32d7b974db9a36991e09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
