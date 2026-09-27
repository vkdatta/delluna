export const name="center_focus_weak";
export const id="dl_401869b6271ef92db6fb";
export const url=new URL("../icons/center_focus_weak.svg?v=96d5fbe549858ec0dfddbea07c2054765249764a0d842e159491fe7262c8d9d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
