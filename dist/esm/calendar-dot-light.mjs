export const name="calendar-dot-light";
export const id="dl_a37c0dade90e43eda6e8";
export const url=new URL("../icons/calendar-dot-light.svg?v=b280cf7eadba6f623d9942c39c4821b605209b838fffb8f91ae6c64aceff3cd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
