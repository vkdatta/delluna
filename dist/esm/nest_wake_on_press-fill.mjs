export const name="nest_wake_on_press-fill";
export const id="dl_1c8df1afce6b48f79fb5";
export const url=new URL("../icons/nest_wake_on_press-fill.svg?v=b9da771eba828bbc60ab9280ef0c4827c9e743b3e51cbdefa48a9cfc522a7282",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
