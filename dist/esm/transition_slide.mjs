export const name="transition_slide";
export const id="dl_0f26b6ff9de0d0497731";
export const url=new URL("../icons/transition_slide.svg?v=5e8de1c77aabd3784a8c31a4023269113ee4b19bc55aa97980922c10dcbbd534",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
