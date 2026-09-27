export const name="lucid_2-corner-left-down";
export const id="dl_4c054465bf3743589376";
export const url=new URL("../icons/lucid_2-corner-left-down.svg?v=5a8de1fe13eb8e1869a541b0d580d8c0e330202b8ea99eebc55a97e48f5c6693",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
