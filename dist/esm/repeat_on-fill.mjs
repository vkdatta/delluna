export const name="repeat_on-fill";
export const id="dl_f54adc1d1cfa4daa817c";
export const url=new URL("../icons/R/repeat_on-fill.svg?v=cf1bb4008da88d19725be2617a38456a8360686d683a388b279147aa9e0dfd7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
