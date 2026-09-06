export const name="barbell";
export const id="dl_b6f6242bb8624cfb97d1";
export const url=new URL("../icons/barbell.svg?v=ac26822fad254eec2de1aaccbaccb24ee31368f5116192439bba41f4f3a306f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
