export const name="settings_bluetooth-fill";
export const id="dl_9478144a874a52cf632a";
export const url=new URL("../icons/settings_bluetooth-fill.svg?v=59bd4b5945ae02c7d448d074fef653db6cdfefc165e0b162bfb3dc285ea9bb05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
