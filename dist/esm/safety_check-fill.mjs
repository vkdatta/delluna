export const name="safety_check-fill";
export const id="dl_256d4edeb8feaddbe75b";
export const url=new URL("../icons/safety_check-fill.svg?v=55ef81db3c2907096f40d28346240135cc955ca5679b1a33f6e6016240afa214",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
