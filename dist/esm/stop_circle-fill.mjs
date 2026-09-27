export const name="stop_circle-fill";
export const id="dl_a11ca49d3278787830c0";
export const url=new URL("../icons/stop_circle-fill.svg?v=ec8c7461e650c653a497bcc1fa1a48a027665d37c59e42b75fae001057bfd0e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
