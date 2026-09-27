export const name="charging-station-duotone";
export const id="dl_45731072fbbc48adb8be";
export const url=new URL("../icons/charging-station-duotone.svg?v=3c30e48678b1fdeae9e8250fc60dcc49f26683aea4f625afc6038bcce4699e21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
