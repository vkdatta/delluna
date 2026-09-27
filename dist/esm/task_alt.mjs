export const name="task_alt";
export const id="dl_6e93c7130c55e0738cb7";
export const url=new URL("../icons/task_alt.svg?v=d66a122ea023f2b89027f64d25dff02f38f8ffedce5a8c31bb4c2893973a727e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
