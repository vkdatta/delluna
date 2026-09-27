export const name="lucid_2-heart-pulse";
export const id="dl_9f9f14d705d6423491dd";
export const url=new URL("../icons/lucid_2-heart-pulse.svg?v=961504f4e364c5fd8b9aff33ceae5a20cb0376fcab8cac3669406de4b912fdf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
