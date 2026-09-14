export const name="alarm_add-fill";
export const id="dl_6ad820d886b840bd8c9d";
export const url=new URL("../icons/A/alarm_add-fill.svg?v=ef4c25357600c1f7256012785ae703979c59e1f1ea93f766512d5fd1f0480b6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
