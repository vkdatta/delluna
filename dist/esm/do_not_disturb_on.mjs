export const name="do_not_disturb_on";
export const id="dl_4d0c0e7f6536a6d714aa";
export const url=new URL("../icons/do_not_disturb_on.svg?v=552f4d6abb83ab62139cd4c9d89767be192c05347a0d0880ad9198814e280e12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
