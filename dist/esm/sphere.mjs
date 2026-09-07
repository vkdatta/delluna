export const name="sphere";
export const id="dl_edfff5505478419f88fa";
export const url=new URL("../icons/S/sphere.svg?v=47af715a961c29d22a0b3b9a750e48726cc9771fcf2a1504f433cd194f5c08d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
