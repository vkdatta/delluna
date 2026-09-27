export const name="next_plan";
export const id="dl_230367ba2e0eeb76c381";
export const url=new URL("../icons/next_plan.svg?v=c32481a305fdf610f40e0dba3a1fc30de22870bfc45d7b166f5180f937e929ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
