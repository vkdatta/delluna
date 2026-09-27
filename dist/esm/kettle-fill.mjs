export const name="kettle-fill";
export const id="dl_2c53691337e7f1992705";
export const url=new URL("../icons/kettle-fill.svg?v=9215c311ad995740874197c330b96135930cbd28df9be1776c6a5f29a2b49265",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
