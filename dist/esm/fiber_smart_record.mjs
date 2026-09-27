export const name="fiber_smart_record";
export const id="dl_182535133141fad223aa";
export const url=new URL("../icons/fiber_smart_record.svg?v=220d9b13436e8da97f7b538fe31bc729174ec7c0d6606dd0f32ccd397c285eb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
