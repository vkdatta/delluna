export const name="magnify_fullscreen";
export const id="dl_6ad8d3cacfb2948a0a07";
export const url=new URL("../icons/magnify_fullscreen.svg?v=6b79eeb8ea4688f24586754974e3ec6dbe5d06a446b2d9f0cb96accc9bfa5a1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
