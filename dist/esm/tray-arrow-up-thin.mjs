export const name="tray-arrow-up-thin";
export const id="dl_5834ba0212dc76eb6f2b";
export const url=new URL("../icons/tray-arrow-up-thin.svg?v=cdeaff7727e348d4eb485df11b050ea1e00eece3eb7a93841a77ceb6fca06b69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
