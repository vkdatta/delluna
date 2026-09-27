export const name="knife-thin";
export const id="dl_c122f32cece24259a4d1";
export const url=new URL("../icons/knife-thin.svg?v=30d23d8217fec4e572d4137359a3210cacadd3e6859070c0d3cdb3ceb58106af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
