export const name="speaker-x-light";
export const id="dl_628a59bbb464af0d3ab3";
export const url=new URL("../icons/speaker-x-light.svg?v=9bda81b8c28abcc28fa3a60be74fcb1e777b69169f3033f7a373dda0867648a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
